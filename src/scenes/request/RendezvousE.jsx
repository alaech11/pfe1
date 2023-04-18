import Header from "../../components/Header";
import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { DataGrid } from "@mui/x-data-grid";

const RendezvousE = () => {

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [meetingDate, setMeetingDate] = useState('');
  const [meetingTime, setMeetingTime] = useState('');
  const [meetingRequests, setMeetingRequests] = useState([]);
  const [formError, setFormError] = useState(null);

  // Fetch meeting requests from the server on component mount
  useEffect(() => {
    const fetchMeetingRequests = async () => {
      try {
        const response = await axios.get('/api/meetings');
        setMeetingRequests(response.data);
      } catch (error) {
        console.error('Failed to fetch meeting requests:', error);
      }
    };
    fetchMeetingRequests();
  }, []);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Validate form inputs
    if (!meetingDate || !meetingTime) {
      setFormError('Please fill in all fields.');
      return;
    }

    // Create a meeting object from the form data
    const meeting = {
      date: meetingDate,
      time: meetingTime
    };

    try {
      // Send the meeting data to the server using an API endpoint
      const response = await axios.post('/api/meetings', meeting);

      // Handle the response from the server
      console.log('Meeting created:', response.data);

      // Add the meeting request to the table of meeting requests
      setMeetingRequests([...meetingRequests, response.data]);

      // Reset form inputs and form error
      setMeetingDate('');
      setMeetingTime('');
      setFormError(null);
    } catch (error) {
      // Handle any errors that occur during the API request
      console.error('Failed to create meeting:', error);
    }
  };

  // Define columns for the DataGrid
  const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'date', headerName: 'Date', width: 200 },
    { field: 'time', headerName: 'Time', width: 200 },
    { field: 'groupe', headerName: 'Groupe ', width: 200 },
    { field: 'action', headerName: 'Action', width: 200 },
  ];

  // Map meeting requests data to rows for the DataGrid
  const rows = meetingRequests.map((request, index) => ({
    id: index + 1,
    date: request.date,
    time: request.time
  }));

  return (
   

   
   
  <Box m="20px">
   <Header title="AJOUTER RENDEZ-VOUS " subtitle="Ajouter un Nouveau Rendez-vous" />   
   
    <form onSubmit={handleFormSubmit} className="needs-validation">
        <div className="form-group">
          <label htmlFor="meetingDate">Meeting Date:</label>
          <input
            type="date"
            id="meetingDate"
            className="form-control"
            value={meetingDate}
            onChange={(e) => setMeetingDate(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="meetingTime">Meeting Time:</label>
          <input
            type="time"
            id="meetingTime"
            className="form-control"
            value={meetingTime}
            onChange={(e) => setMeetingTime(e.target.value)}
            required
          />
        </div>


        {formError && <div className="text-danger mb-3">{formError}</div>}

        <br/>

        <button type="submit" className="btn btn-primary">Planifier une réunion</button>
      </form>
      <Header subtitle="Demandes de réunion" />
     
      <Box
          mr="250px"
        height="50vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[400],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[400],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid rows={rows} columns={columns} pageSize={5} />
      </Box>
      
      </Box>

  );
};

export default RendezvousE;
