import { Box, Button, TextField, MenuItem  } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import { MyProSidebarProviderE } from "../global/SidebarContextE";


const currencies = [
    {
      value: 'sma',
      label: 'SMA',
    },
    {
      value: 'smi',
      label: 'SMI',
    },
    {
      value: 'smp',
      label: 'SMP',
    },
    {
      value: 'smc',
      label: 'SMC',
    },
    {
        value: 'svi',
        label: 'SVI',
      },
      {
        value: 'stu',
        label: 'STU',
      },
  ];
const AjoutP = () => {
  const isNonMobile = useMediaQuery("(min-width:700px)");

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

    <MyProSidebarProviderE>
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
            mr="-50px"
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
                sx={{ gridColumn: "span 8" }}
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
                sx={{ gridColumn: "span " }}
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
                TextField
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
                sx={{ gridColumn: "span 8" }}
              />
             
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
              Creér Projet
              </Button>
            </Box>
          
          </form>
        )}
      </Formik>
    </Box></MyProSidebarProviderE>
  );
};

export default AjoutP;