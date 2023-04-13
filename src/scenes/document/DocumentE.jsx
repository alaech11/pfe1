import {Box} from "@mui/material";
import Header from "../../components/Header";
import { MyProSidebarProviderU } from "../global/SidebarContextU";
import { UploadOutlined } from '@ant-design/icons';
import { Button, message, Upload } from 'antd';
import { useState } from 'react';



const DocumentE = () => {
  const [fileList, setFileList] = useState([]);
  const [uploading, setUploading] = useState(false);


  const handleUpload = () => {
    const formData = new FormData();
    fileList.forEach((file) => {
      formData.append('files[]', file);
    });
    setUploading(true);
    // You can use any AJAX library you like
    fetch('http://localhost:8000/api/SaveProfessorFromFile', {
      method: 'POST',
      body: formData,
    })
      .then((res) => res.json())
      .then(() => {
        setFileList([]);
        message.success('upload successfully.');
      })
      .catch(() => {
        message.error('upload failed.');
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

    <MyProSidebarProviderU>

        <Box m="20px">
        <Header title="DOCUMENT" subtitle="Ajouter Votre Document" />
      <Upload {...props} >
        <Button icon={<UploadOutlined />}>Selecter Fichier</Button>
      </Upload> 
      <Button
        type="primary"
        onClick={handleUpload}
        disabled={fileList.length === 0}
        loading={uploading}
        style={{
          marginTop: 16,
          justifyContent:'center'
        }}
      >
        {uploading ? 'Uploading' : 'Start Upload'}
      </Button>
  
  </Box> </MyProSidebarProviderU>

  )
    }
 export default DocumentE;