import axios from "../services/api";
export default async function registerValidation (data){
     const formData = new FormData();
     
     formData.append('numMatricula',data.numMatricula);
     formData.append('senha', data.senha);
     formData.append('nome', data.nome);
     formData.append('email', data.email);
     formData.append('curso', data.curso);
     let r = "";
     await axios.post('cadastroUsuario.php', formData)
        .then(function (response) {
          r = response;
        })
        .catch(function (error) {
          console.log(error);
        });
        return r.data;
}
