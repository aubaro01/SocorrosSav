import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button, Form } from "react-bootstrap";
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function PageExe1() {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    circuito: "",
    concluido: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [exercicioNome] = useState("OVA&PLS");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const exercicioId = process.env.REACT_APP_EXER1_ID;


  useEffect(() => {
    if (!exercicioId) {
      console.error("REACT_APP_EXER1_ID não está definido no ambiente");
      setError("Erro de configuração - ID do exercício não encontrado");
    }
  }, [exercicioId]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setError(null);

    if (!formData.nome.trim() || !formData.circuito.trim()) {
      setError("Por favor, preencha todos os campos obrigatórios");
      setIsLoading(false);
      return;
    }

    const requestData = {
      nome: formData.nome.trim(),
      circuito: formData.circuito.trim(),
      id_Exer_fk: exercicioId,
      exer_res: formData.concluido ? "Feito" : "Não Feito",
    };

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/ExerUser`,
        requestData,
        {
          headers: {
            'Content-Type': 'application/json',
          }
        }
      );
      console.log("Dados enviados:", response.data);
      setSubmitted(true);
    } catch (error) {
      let errorMessage = "Erro ao enviar dados";

      if (error.response) {
        errorMessage = error.response.data?.message ||
          `Erro ${error.response.status}: ${error.response.statusText}`;
      } else if (error.request) {
        errorMessage = "Sem resposta do servidor";
      } else {
        errorMessage = error.message || "Erro ao configurar a requisição";
      }

      console.error("Erro ao enviar dados:", error);
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleModalClose = () => {
    setShowModal(false);
    setSubmitted(false);
    setError(null);
    setFormData({ nome: "", circuito: "", concluido: false });
  };

   const stepsDVA = [
     {
       id: 0,
       title: "Vídeo Instrutivo",
       content: (
         <>
           <div className="ratio ratio-16x9 mb-4">
             <iframe
               src="https://drive.google.com/file/d/13qk7SmcpZ7w8CcaaSQ-RUHl3y2P86i7L/preview"
               title="Vídeo demonstrativo do exercício"
               allowFullScreen
               allow="autoplay"
               sandbox="allow-scripts allow-same-origin allow-forms"
             ></iframe>
           </div>
           <p style={{ fontSize: "1.1rem", lineHeight: "1.7", color: "#e9ecef" }}>
             Assista o vídeo.
           </p>
         </>
       ),
     },
     {
       id: 1,
       title: "Encorajar Tossir",
       content: (
         <div className="row align-items-center">
           <div className="col-md-6">
             <p style={{ fontSize: "1.1rem", lineHeight: "1.7", color: "#e9ecef" }}>
               Enquanto a vítima conseguir tossir, encoraje a tossir na tentativa de
               expelir o corpo estranho.
             </p>
           </div>
           <div className="col-md-6 text-center">
             <img
               src="/assets/dva1.png"
               alt="Encorajar Tossir"
               className="img-fluid rounded"
               style={{ maxHeight: "350px", border: "3px solid #f39c12" }}
             />
           </div>
         </div>
       ),
     },
     {
       id: 2,
       title: "Pancadas Interescapulares",
       content: (
         <div className="row align-items-center">
           <div className="col-md-6">
             <p style={{ fontSize: "1.1rem", lineHeight: "1.7", color: "#e9ecef" }}>
               Se a vítima não conseguir tossir, aplique cinco (5) pancadas interescapulares entre as omoplatas.
             </p>
             <ul style={{ fontSize: "1.1rem", lineHeight: "1.7", color: "#e9ecef" }}>
               <li className="mb-2">Coloque-se por detrás da vítima mantendo uma posição de equilíbrio.</li>
               <li className="mb-2">Segure o tórax da vítima passando um braço por baixo da axila.</li>
               <li className="mb-3">
                 Com a outra mão aplique até 5 pancadas vigorosas entre as omoplatas.
               </li>
             </ul>
           </div>
           <div className="col-md-6 text-center">
             <img
               src="/assets/dva2.png"
               alt="Pancadas Interescapulares"
               className="img-fluid rounded"
               style={{ maxHeight: "350px", border: "3px solid #f39c12" }}
             />
           </div>
         </div>
       ),
     },
     {
       id: 3,
       title: "Manobra de Heimlich",
       content: (
         <div className="row">
           <div className="col-md-12">
             <div className="row mb-4 align-items-center">
               <div className="col-md-6">
                 <h4 style={{ color: "#f39c12", marginBottom: "1rem" }}>Passo 1</h4>
                 <p
                   style={{
                     fontSize: "1.1rem",
                     lineHeight: "1.7",
                     color: "#e9ecef",
                   }}
                 >
                   Posicione-se atrás da vítima e circunde o abdômen dela com os
                   seus braços.
                 </p>
               </div>
               <div className="col-md-6 text-center">
                 <img
                   src="/assets/dva3.png"
                   alt="Passo 1: Posicionar-se atrás da vítima"
                   className="img-fluid rounded"
                   style={{ maxHeight: "250px", border: "3px solid #f39c12" }}
                 />
               </div>
 
             </div>
 
             <div className="step-card mb-4 p-3 rounded" style={{ backgroundColor: "rgba(209, 144, 39, 0.1)", borderLeft: "4px solid #f39c12" }}>
               <div className="row align-items-center">
                 <div className="col-md-6">
                   <h4 className="text-warning mb-3">Passo 2</h4>
                   <p style={{
                     fontSize: "1.1rem",
                     lineHeight: "1.7",
                     color: "#e9ecef",
                   }}>
                     Feche o punho de uma mão e posicione-o acima do umbigo da vítima,
                     com o polegar voltado contra o abdômen.
                   </p>
                 </div>
                 <div className="col-md-6 text-center order-md-2">
                   <img
                     src="/assets/dva4.png"
                     alt="Passo 2: Posição de segurança"
                     className="img-fluid rounded"
                     style={{ maxHeight: "250px", border: "3px solid #f39c12" }}
                   />
                 </div>
               </div>
             </div>
 
             <div className="row mb-4 align-items-center">
               <div className="col-md-6">
                 <h4 style={{ color: "#f39c12", marginBottom: "1rem" }}>Passo 3</h4>
                 <p
                   style={{
                     fontSize: "1.1rem",
                     lineHeight: "1.7",
                     color: "#e9ecef",
                   }}
                 >
                   Sobreponha o punho da 2ª mão sobre o punho da 1ª mão e aplique uma
                   compressão rápida para dentro e para cima.
                 </p>
               </div>
               <div className="col-md-6 text-center">
                 <img
                   src="/assets/dva5.png"
                   alt="Passo 3: Posicionar os pés"
                   className="img-fluid rounded"
                   style={{ maxHeight: "250px", border: "3px solid #f39c12" }}
                 />
 
                 <img
                   src="/assets/dva6.png"
                   alt="Passo 4: Alinhar joelhos"
                   className="img-fluid rounded"
                   style={{ maxHeight: "250px", border: "3px solid #f39c12" }}
                 />
               </div>
             </div>
 
             <div className="row mb-4 align-items-center">
               <div className="col-md-12">
                 <div
                   className="alert alert-warning"
                   role="alert"
                   style={{
                     backgroundColor: "#fff3cd",
                     color: "#856404",
                     border: "1px solid #ffeeba",
                     padding: "1.5rem",
                     borderRadius: "8px",
                   }}
                 >
                   <h5
                     className="alert-warning"
                     style={{
                       fontWeight: "bold",
                       fontSize: "1.3rem",
                       marginBottom: "1rem",
                     }}
                   >
                     Lembre-se:
                   </h5>
                   <p
                     style={{
                       fontSize: "1.1rem",
                       lineHeight: "1.7",
                       marginBottom: "0",
                     }}
                   >
                     Repita até 5 vezes este processo. Intercale as pancadas interescapulares
                     com as compressões abdominais até a situação resolver-se ou a vítima
                     ficar inconsciente.
                   </p>
                 </div>
               </div>
             </div>
           </div>
         </div>
       ),
     },
     {
       id: 4,
       title: "Em caso de vítima inconsciente",
       content: (
         <div className="row align-items-center g-4">
           <div className="col-lg-6 order-lg-1 order-2">
             <div
               className="emergency-steps p-3 p-md-4 rounded-3"
               style={{
                 backgroundColor: "rgba(30, 30, 30, 0.8)",
                 borderLeft: "4px solid #f39c12",
               }}
             >
               <h3 className="text-warning mb-3 fw-bold">Procedimento:</h3>
               <ul
                 className="step-list ps-3"
                 style={{
                   fontSize: "1.15rem",
                   lineHeight: "1.8",
                   color: "#ffffff",
                 }}
               >
                 <li className="mb-2 d-flex align-items-start">
                   <span className="badge bg-warning text-dark me-2 mt-1">
                     1
                   </span>
                   <span>
                     Ligue imediatamente para o{" "}
                     <strong className="text-warning">112</strong>
                   </span>
                 </li>
                 <li className="d-flex align-items-start">
                   <span className="badge bg-warning text-dark me-2 mt-1">
                     2
                   </span>
                   <span>
                     Inicie o <strong>suporte básico de vida.</strong>
                   </span>
                 </li>
                 <li className="d-flex align-items-start">
                   <span className="badge bg-warning text-dark me-2 mt-1">
                     3
                   </span>
                   <span>Siga sempre as instruções das autoridades</span>
                 </li>
               </ul>
               <div className="mt-4 alert alert-warning border-warning">
                 <i className="bi bi-exclamation-triangle-fill me-2"></i>
                 <span style={{ color: "#000000" }}>
                   Não mova a vítima sem necessidade!
                 </span>
               </div>
             </div>
           </div>
           <div className="col-lg-6 order-lg-2 order-1 text-center">
             <img
               src="/assets/emerNumber.png"
               alt="Procedimento para vítima inconsciente"
               className="img-fluid rounded shadow"
               style={{
                 maxHeight: "320px",
                 border: "3px solid #f39c12",
                 boxShadow: "0 4px 12px rgba(243, 156, 18, 0.3)",
               }}
             />
           </div>
         </div>
       ),
     },
   ];
   const stepsPLS = [
     {
       id: 0,
       title: "Vídeo introdutório",
       content: (
         <>
           <div className="ratio ratio-16x9 mb-4">
             <iframe
               src="https://drive.google.com/file/d/1nVGa1CQbQj3lnEj7ry9G8F4WQpQucHVd/preview"
               title="Vídeo demonstrativo do exercício"
               allowFullScreen
               allow="autoplay"
             ></iframe>
           </div>
           <p style={{ fontSize: "1.1rem", lineHeight: "1.7", color: "#e9ecef" }}>
             Assista o vídeo.
           </p>
         </>
       ),
     },
     {
       id: 1,
       title: "Condições de Segurança",
       content: (
         <div className="row">
           <div className="col-md-6">
             <p style={{ fontSize: "1.1rem", lineHeight: "1.7", color: "#e9ecef" }}>
             Verifique se a vítima está usar algo que possa colocá-la em
             perigo (ex.: oculos, chaves, etc...).
             </p>
           </div>
           <div className="col-md-6 text-center">
             <img
               src="/assets/pls1.png"
               alt="Ver se tem condições para socorrer"
               className="img-fluid rounded"
               style={{ maxHeight: "350px", border: "3px solid #f39c12" }}
             />
           </div>
         </div>
       ),
     },
     {
       id: 2,
       title: "Avaliar Consciência",
       content: (
         <div className="row">
           <div className="col-md-12">
             <div className="row mb-4 align-items-center">
               <div className="col-md-6 text-center">
                 <img
                   src="/assets/pls2.png"
                   alt="Passo 1: Avaliar a vítima"
                   className="img-fluid rounded"
                   style={{ maxHeight: "250px", border: "3px solid #f39c12" }}
                 />
               </div>
               <div className="col-md-6">
                 <h4 style={{ color: "#f39c12", marginBottom: "1rem" }}>
                   Passo 1
                 </h4>
                 <ul
                   style={{
                     fontSize: "1.1rem",
                     lineHeight: "1.7",
                     color: "#e9ecef",
                   }}
                 >
                   <li className="mb-2">
                     Verifique se a vítima está consciente.
                   </li>
 
                 </ul>
               </div>
             </div>
 
             <div className="row mb-4 align-items-center">
               <div className="step-card mb-4 p-3 rounded" style={{ backgroundColor: "rgba(209, 144, 39, 0.1)", borderLeft: "4px solid #f39c12" }}>
                 <div className="row align-items-center">
                   <div className="col-md-6">
                     <h4 className="text-warning mb-3">Passo 2</h4>
                     <ul
                       style={{
                         fontSize: "1.1rem",
                         lineHeight: "1.7",
                         color: "#e9ecef",
                       }}
                     >
                       <li className="mb-2">
                         Realizar VOS (ver, ouvir, sentir)
                       </li>
 
                     </ul>
                   </div>
                   <div className="col-md-6 text-center order-md-2">
                     <img
                       src="/assets/pls3.png"
                       alt="Passo 2: Posicionar a vítima"
                       className="img-fluid rounded"
                       style={{ maxHeight: "250px", border: "3px solid #f39c12" }}
                     />
                   </div>
                 </div>
               </div>
             </div>
 
 
             <div className="row mb-4 align-items-center">
               <div className="col-md-6">
                 <h4 style={{ color: "#f39c12", marginBottom: "1rem" }}>
                   Passo 3
                 </h4>
                 <ul
                   style={{
                     fontSize: "1.1rem",
                     lineHeight: "1.7",
                     color: "#e9ecef",
                   }}
                 >
                   <li className="mb-2">
                     Colocar a mão mais proxima de nós em posição de sinaleiro
                   </li>
                   <li className="mb-2">
                     Segurar a outra mão entrelançando os dedos e colocando-a junto do rosto da pessoa.
                   </li>
                   <li className="mb-2">
                     Dobrar o joelho da vítima que está mais longe.
                   </li>
                 </ul>
               </div>
               <div className="col-md-6 text-center">
                 <img
                   src="/assets/pls4.png"
                   alt="Passo 3: Transportar a vítima"
                   className="img-fluid rounded"
                   style={{ maxHeight: "250px", border: "3px solid #f39c12" }}
                 />
                 <img
                   src="/assets/pls5.png"
                   alt="Passo 2: Posicionar a vítima"
                   className="img-fluid rounded"
                   style={{ maxHeight: "250px", border: "3px solid #f39c12" }}
                 />
               </div>
             </div>
 
             <div className="row mb-4 align-items-center">
               <div className="step-card mb-4 p-3 rounded" style={{ backgroundColor: "rgba(209, 144, 39, 0.1)", borderLeft: "4px solid #f39c12" }}>
                 <div className="row align-items-center">
                   <div className="col-md-6">
                     <h4 className="text-warning mb-3">Passo 4</h4>
                     <ul
                       style={{
                         fontSize: "1.1rem",
                         lineHeight: "1.7",
                         color: "#e9ecef",
                       }}
                     >
                   <li className="mb-2">
                     Rodar a vítima para o lado do braço que está apoiado no chão
                   </li>
                       <li className="mb-2">
                         Permeabilizar a via aérea, inclinado a cabeça ligeramente para trás.
                       </li>
                     </ul>
                   </div>
                   <div className="col-md-6 text-center order-md-2">
                     <img
                       src="/assets/pls6.png"
                       alt="Passo 3: Transportar a vítima"
                       className="img-fluid rounded"
                       style={{ maxHeight: "250px", border: "3px solid #f39c12" }}
                     />
                     <img
                       src="/assets/pls7.png"
                       alt="Passo 2: Posicionar a vítima"
                       className="img-fluid rounded"
                       style={{ maxHeight: "250px", border: "3px solid #f39c12" }}
                     />
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </div>
       ),
     },
     {
       id: 3,
       title: "Vigiar Vítima",
       content: (
         <>
           <p style={{ fontSize: "1.1rem", lineHeight: "1.7", color: "#e9ecef" }}>
             Após colocar a pessoa nesta posição é importante observar até a chegada da ambulância. Se nesse tempo a vitima deixar de respirar, deve voltar a rodar de barriga para cima e iniciar o suporte básico de vida
           </p>
           <div className="text-center mb-4">
             <img
               src="/assets/pls1.png"
               alt="Posição Inicial"
               className="img-fluid rounded"
               style={{ maxHeight: "350px", border: "3px solid #f39c12" }}
             />
           </div>
         </>
       ),
     },
   ];
 
   return (
     <div className="exercise-page">
       <header className="py-4" style={{ backgroundColor: "#2c3e50", color: "#fff" }}>
         <div className="container">
           <div className="d-flex justify-content-between align-items-center">
             <h1 className="m-0" style={{ fontSize: "1.8rem", fontWeight: "700" }}>S.A.V</h1>
             <p className="mt-2 mb-0" style={{ fontSize: "1.1rem", color: "#ecf0f1" }}>
               DVA & PLS
             </p>
           </div>
         </div>
       </header>
 
       <main className="container py-5">
         <div className="text-center mb-5">
           <h2 style={{ fontSize: "2.5rem", fontWeight: "700", color: "black", marginBottom: "1rem" }}>
             Desobstrução de Via Aérea (DVA)
           </h2>
           <div
             className="mx-auto"
             style={{ width: "50px", height: "3px", backgroundColor: "#f39c12", marginBottom: "1.5rem" }}
           ></div>
           <p style={{ fontSize: "1.2rem", color: "black" }}>
             Neste exercício, você aprenderá os princípios básicos para desobstruir a via aérea.
           </p>
         </div>
 
         {stepsDVA.map((step) => (
           <section key={step.id} className="mb-5 p-4 rounded" style={{ backgroundColor: "#343a40" }}>
             <div className="d-flex align-items-center mb-4">
               <div
                 style={{
                   minWidth: "40px",
                   height: "40px",
                   borderRadius: "50%",
                   backgroundColor: "#f39c12",
                   color: "#343a40",
                   display: "flex",
                   alignItems: "center",
                   justifyContent: "center",
                   fontWeight: "bold",
                   fontSize: "1.2rem",
                   marginRight: "15px",
                 }}
               >
                 {step.id}
               </div>
               <h3
                 style={{
                   fontSize: "1.5rem",
                   fontWeight: "600",
                   margin: 0,
                   color: "#ecf0f1",
                   borderLeft: "3px solid #f39c12",
                   paddingLeft: "15px",
                 }}
               >
                 {step.title}
               </h3>
             </div>
             {step.content}
           </section>
         ))}
 
         <div className="text-center mb-5">
           <h2 style={{ fontSize: "2.5rem", fontWeight: "700", color: "black", marginBottom: "1rem" }}>
             Posição Lateral de Segurança (PLS)
           </h2>
           <div
             className="mx-auto"
             style={{ width: "50px", height: "3px", backgroundColor: "#f39c12", marginBottom: "1.5rem" }}
           ></div>
         </div>
 
         {stepsPLS.map((step) => (
           <section key={step.id} className="mb-5 p-4 rounded" style={{ backgroundColor: "#343a40" }}>
             <div className="d-flex align-items-center mb-4">
               <div
                 style={{
                   minWidth: "40px",
                   height: "40px",
                   borderRadius: "50%",
                   backgroundColor: "#f39c12",
                   color: "#343a40",
                   display: "flex",
                   alignItems: "center",
                   justifyContent: "center",
                   fontWeight: "bold",
                   fontSize: "1.2rem",
                   marginRight: "15px",
                 }}
               >
                 {step.id}
               </div>
               <h3
                 style={{
                   fontSize: "1.5rem",
                   fontWeight: "600",
                   margin: 0,
                   color: "#ecf0f1",
                   borderLeft: "3px solid #f39c12",
                   paddingLeft: "15px",
                 }}
               >
                 {step.title}
               </h3>
             </div>
             {step.content}
           </section>
         ))}
         <section className="p-4 mb-5 rounded" style={{ backgroundColor: "#2c3e50", border: "1px solid rgba(255,255,255,0.1)" }}>
           <h4 style={{ fontSize: "1.2rem", fontWeight: "600", textAlign: "center", marginBottom: "1.5rem", color: "#ecf0f1" }}>
             Resumo
           </h4>
           <div className="row">
             <div className="col-md-6">
               <div className="d-flex align-items-center mb-3">
                 <div
                   style={{
                     minWidth: "30px",
                     height: "30px",
                     borderRadius: "50%",
                     backgroundColor: "#f39c12",
                     color: "#2c3e50",
                     display: "flex",
                     alignItems: "center",
                     justifyContent: "center",
                     marginRight: "10px",
                     fontSize: "0.9rem",
                     fontWeight: "bold",
                   }}
                 >
                   1
                 </div>
                 <p className="m-0" style={{ fontSize: "0.9rem", fontWeight: "400", color: "#ecf0f1" }}>
                   Encorajar a tossir
                 </p>
               </div>
               <div className="d-flex align-items-center mb-3">
                 <div
                   style={{
                     minWidth: "30px",
                     height: "30px",
                     borderRadius: "50%",
                     backgroundColor: "#f39c12",
                     color: "#2c3e50",
                     display: "flex",
                     alignItems: "center",
                     justifyContent: "center",
                     marginRight: "10px",
                     fontSize: "0.9rem",
                     fontWeight: "bold",
                   }}
                 >
                   2
                 </div>
                 <p className="m-0" style={{ fontSize: "0.9rem", fontWeight: "400", color: "#ecf0f1" }}>
                   Pancadas Interescapulares
                 </p>
               </div>
               <div className="d-flex align-items-center mb-3">
                 <div
                   style={{
                     minWidth: "30px",
                     height: "30px",
                     borderRadius: "50%",
                     backgroundColor: "#f39c12",
                     color: "#2c3e50",
                     display: "flex",
                     alignItems: "center",
                     justifyContent: "center",
                     marginRight: "10px",
                     fontSize: "0.9rem",
                     fontWeight: "bold",
                   }}
                 >
                   3
                 </div>
                 <p className="m-0" style={{ fontSize: "0.9rem", fontWeight: "400", color: "#ecf0f1" }}>
                   Manobra de Heimlich
                 </p>
               </div>
             </div>
             <div className="col-md-6">
               <div className="d-flex align-items-center mb-3">
                 <div
                   style={{
                     minWidth: "30px",
                     height: "30px",
                     borderRadius: "50%",
                     backgroundColor: "#f39c12",
                     color: "#2c3e50",
                     display: "flex",
                     alignItems: "center",
                     justifyContent: "center",
                     marginRight: "10px",
                     fontSize: "0.9rem",
                     fontWeight: "bold",
                   }}
                 >
                   4
                 </div>
                 <p className="m-0" style={{ fontSize: "0.9rem", fontWeight: "400", color: "#ecf0f1" }}>
                   Condições de Segurança
                 </p>
               </div>
               <div className="d-flex align-items-center mb-3">
                 <div
                   style={{
                     minWidth: "30px",
                     height: "30px",
                     borderRadius: "50%",
                     backgroundColor: "#f39c12",
                     color: "#2c3e50",
                     display: "flex",
                     alignItems: "center",
                     justifyContent: "center",
                     marginRight: "10px",
                     fontSize: "0.9rem",
                     fontWeight: "bold",
                   }}
                 >
                   5
                 </div>
                 <p className="m-0" style={{ fontSize: "0.9rem", fontWeight: "400", color: "#ecf0f1" }}>
                   Avaliar Consciência
                 </p>
               </div>
               <div className="d-flex align-items-center mb-3">
                 <div
                   style={{
                     minWidth: "30px",
                     height: "30px",
                     borderRadius: "50%",
                     backgroundColor: "#f39c12",
                     color: "#2c3e50",
                     display: "flex",
                     alignItems: "center",
                     justifyContent: "center",
                     marginRight: "10px",
                     fontSize: "0.9rem",
                     fontWeight: "bold",
                   }}
                 >
                   6
                 </div>
                 <p className="m-0" style={{ fontSize: "0.9rem", fontWeight: "400", color: "#ecf0f1" }}>
                   Vigiar Vítima
                 </p>
               </div>
             </div>
           </div>
           <p style={{ fontSize: "1.1rem", lineHeight: "1.7", color: "#e9ecef", marginBottom: "1.5rem", textAlign: "center" }}>
             <strong>Conclusão do Exercício</strong>
           </p>
         </section>
       </main>
 
       <footer className="border-top py-4" style={{ backgroundColor: "#F9F9F9" }}>
         <div className="container text-center">
           <p style={{ fontSize: "0.9rem", color: "#757575" }}>
             © {new Date().getFullYear()} S.A.V. <br />Todos os direitos reservados.
           </p>
         </div>
       </footer>

      <Modal show={showModal} onHide={handleModalClose} centered backdrop="static">
        <Modal.Header closeButton className="border-0 pb-0" style={{ backgroundColor: '#f8f9fa' }}>
          <Modal.Title className="fw-bold" style={{ color: '#2c3e50', fontSize: '1.5rem' }}>
            <i className="bi bi-clipboard-check me-2" style={{ color: '#27ae60' }}></i>
            Registrar Exercício
          </Modal.Title>
        </Modal.Header>

        <Modal.Body className="px-4 pt-3 pb-4">
          {error && (
            <div className="alert alert-danger d-flex align-items-center mb-4" role="alert">
              <i className="bi bi-exclamation-triangle-fill me-2"></i>
              <div>{error}</div>
            </div>
          )}

          {!submitted ? (
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-4" controlId="formNome">
                <Form.Label className="fw-semibold mb-2" style={{ color: '#34495e' }}>
                  Nome <span className="text-danger">*</span>
                </Form.Label>
                <Form.Control
                  type="text"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  placeholder="Digite o seu nome"
                  required
                  className="p-3 rounded-3"
                  style={{ border: '2px solid #dfe6e9', fontSize: '1.05rem' }}
                  disabled={isLoading}
                />
                {!formData.nome.trim() && (
                  <Form.Text className="text-danger">
                    Este campo é obrigatório
                  </Form.Text>
                )}
              </Form.Group>

              <Form.Group className="mb-4" controlId="formCircuito">
                <Form.Label className="fw-semibold mb-2" style={{ color: '#34495e' }}>
                  Circuito <span className="text-danger">*</span>
                </Form.Label>
                <Form.Control
                  type="text"
                  name="circuito"
                  value={formData.circuito}
                  onChange={handleChange}
                  placeholder="Digite o seu circuito"
                  minLength={2}
                  maxLength={3}
                  required
                  className="p-3 rounded-3"
                  style={{ border: '2px solid #dfe6e9', fontSize: '1.05rem' }}
                  disabled={isLoading}
                />
                {!formData.circuito.trim() && (
                  <Form.Text className="text-danger">
                    Este campo é obrigatório
                  </Form.Text>
                )}
              </Form.Group>

              <Form.Group className="mb-4" controlId="formConcluido">
                <div className="form-check form-switch d-flex align-items-center">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="concluido"
                    id="flexSwitchCheckChecked"
                    checked={formData.concluido}
                    onChange={handleChange}
                    style={{
                      width: "3em",
                      height: "1.5em",
                      cursor: isLoading ? "not-allowed" : "pointer",
                      marginRight: "10px",
                      opacity: isLoading ? 0.7 : 1
                    }}
                    disabled={isLoading}
                  />
                  <label
                    className="form-check-label fw-semibold"
                    htmlFor="flexSwitchCheckChecked"
                    style={{
                      color: formData.concluido ? "#2ecc71" : "#34495e",
                      fontSize: "1.05rem",
                      transition: "color 0.3s ease",
                      userSelect: "none",
                      cursor: isLoading ? "not-allowed" : "pointer",
                    }}
                  >
                    {formData.concluido ? (
                      <>
                        <i className="bi bi-check-circle-fill me-2"></i>
                        Exercício marcado como concluído
                      </>
                    ) : (
                      <>
                        <i className="bi bi-circle me-2"></i>
                        Marcar como concluído
                      </>
                    )}
                  </label>
                </div>
              </Form.Group>

              <div className="text-center mt-4">
                <Button
                  type="submit"
                  className="fw-bold px-4 py-3 rounded-3"
                  style={{
                    backgroundColor: '#27ae60',
                    border: 'none',
                    fontSize: '1.1rem',
                    width: '100%',
                    boxShadow: '0 4px 6px rgba(39, 174, 96, 0.2)'
                  }}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                      A Enviar...
                    </>
                  ) : (
                    <>
                      <i className="bi bi-send-check me-2"></i>
                      Enviar
                    </>
                  )}
                </Button>
              </div>
            </Form>
          ) : (
            <div className="text-center py-3">
              <div className="mb-4">
                <i className="bi bi-check-circle-fill" style={{ fontSize: '4rem', color: '#27ae60' }}></i>
              </div>
              <h5 className="fw-bold mb-3" style={{ color: '#2c3e50' }}>
                Exercício concluído com sucesso!
              </h5>
              <p className="text-muted mb-4">
                Obrigado por completar o exercício.
              </p>
              <Button
                onClick={handleModalClose}
                className="fw-semibold px-4 py-2 rounded-3"
                style={{
                  backgroundColor: '#7f8c8d',
                  border: 'none',
                  width: '50%'
                }}
              >
                Fechar
              </Button>
            </div>
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
}
