import React, { useState } from 'react';
import { Box } from "@mui/material";
import Header from "../../components/Header";
import { UploadOutlined } from '@ant-design/icons';
import { Button, message, Upload } from 'antd';

const DocumentE = () => {
  const [fileList, setFileList] = useState([]);
  const [uploading, setUploading] = useState(false);

  const handleUpload = () => {
    const formData = new FormData();
    fileList.forEach((file) => {
      formData.append('files[]', file);
    });
    setUploading(true);

    // Send a POST request to the server with the file data
    fetch('http://localhost:8000/api/SaveProfessorFromFile', {
      method: 'POST',
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        setFileList([]);
        message.success('Upload successful.');
        // Access the response data and perform additional actions if needed
        console.log('Response data:', data);
      })
      .catch(() => {
        message.error('Upload failed.');
      })
      .finally(() => {
        setUploading(false);
      });
  };

  const props = {
    onRemove: (file) => {
      const index = fileList.indexOf(file);
      const newFileList = fileList.slice();
      newFileList.splice(index, 1);
      setFileList(newFileList);
    },
    beforeUpload: (file) => {
      setFileList([...fileList, file]);
      return false;
    },
    fileList,
  };

  return (
  
      <Box m="20px">
        <Header title="DOCUMENT" subtitle="Ajouter Votre Document" />
        <Upload {...props} >
          <Button icon={<UploadOutlined />} style={{ marginTop: '16px' }}>
            Sélectionner un fichier
          </Button>
        </Upload>
        <Button
          type="primary"
          onClick={handleUpload}
          disabled={fileList.length === 0 || uploading}
          loading={uploading}
          style={{ marginTop: '16px', justifyContent: 'center' }}
        >
          {uploading ? 'En cours de chargement' : 'Commencer le chargement'}
        </Button>
      </Box>
    
  );
}

export default DocumentE;
