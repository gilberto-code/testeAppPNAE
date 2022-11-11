import axios from "../../services/api";
export default async function requestUser (numMatricula){
     const formData = new FormData();
     
     formData.append('numMatricula',numMatricula);
     //formData.append('senha', senha);
     
     let r = "";
     await axios.post('infoUsuario.php',
         {numMatricula:numMatricula})
        .then(function (response) {
          r = response;
           console.log(response.data);
        })
        .catch(function (error) {
          //console.log(error);
        });
        return r.data;
}
