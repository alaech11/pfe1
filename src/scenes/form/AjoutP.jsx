import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import { MenuItem } from "react-pro-sidebar";
import { Link } from 'react-router-dom';


const currencies = [
    {
      value: 'SMA',
      label: 'SMA',
    },
    {
      value: 'SMI',
      label: 'SMI',
    },
    {
      value: 'SMP',
      label: 'SMP',
    },
    {
      value: 'SMC',
      label: 'SMC',
    },
    {
        value: 'SVI',
        label: 'SVI',
      },
      {
        value: 'STU',
        label: 'STU',
      },
  ];
const AjoutP = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = (values) => {
    console.log(values);
  };

const checkoutSchema = yup.object().shape({
  nomSujet: yup.string().required("required"),
  nombrePersonnes: yup.string().required("required"),
  filière: yup.string().required("required"),
 descreption: yup.string().required("required"),
});
const initialValues = {
    nomSujet: "",
    nombrePersonnes: "",
    filière: "",
    descreption: "",
};

  return (
    <Box m="20px">
      <Header title="CRÉER PROJET" subtitle="Creér un Nouveau Projet" />
      

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={checkoutSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Nom de Sujet"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.nomSujet}
                name="nomSujet"
                error={!!touched.nomSujet && !!errors.nomSujet}
                helperText={touched.nomSujet && errors.nomSujet}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="number"
                label="Nombre de personnes"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.nombrePersonnes}
                name="nombrePersonnes"
                error={!!touched.nombrePersonnes && !!errors.nombrePersonnes}
                helperText={touched.nombrePersonnes && errors.nombrePersonnes}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                select
                variant="filled"
                label="Filière"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.filière}
                name="filière"
                error={!!touched.filière && !!errors.filière}
                helperText={touched.filière && errors.filière}
                sx={{ gridColumn: "span 2" }}
              > 
              
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
              
              </TextField>




              <TextField
                fullWidth
                multiline
                id="filled-multiline-static"
                variant="filled"
                type="text"
                label="Descreption"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.descreption}
                name="descreption"
                error={!!touched.descreption && !!errors.descreption}
                helperText={touched.descreption && errors.descreption}
                sx={{ gridColumn: "span 4" }}
              />
             
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
              Creér Projet
              </Button>
            </Box>
            <br/>
      <Link   to='/Enseignant' className='btn-mobile'>
      <Button color="secondary" variant="contained"> RENTRE</Button></Link>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default AjoutP;