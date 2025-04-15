import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button, Form } from "react-bootstrap";
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function PageEx3() {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    circuito: "",
    concluido: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [exercicioNome] = useState("Maca");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const exercicioId = process.env.REACT_APP_EXER3_ID;


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


  const steps = [
    {
      id: 0,
      title: "Vídeo introdutório",
      content: (
        <>
          <div className="ratio ratio-16x9 mb-4">
            <iframe
              src="https://drive.google.com/file/d/1TG6jena9SlWF0byWXfnc-EtKMJ_1-wK6/preview"
              title="Vídeo demonstrativo do exercício"
              allowFullScreen
              allow="autoplay"
              sandbox="allow-scripts allow-same-origin allow-forms"
            ></iframe>
          </div>
          <p style={{ fontSize: "1.1rem", lineHeight: "1.7", color: "#e9ecef" }}>
            Assista ao vídeo abaixo para entender a técnica correta de execução do exercício. Preste atenção aos detalhes dos movimentos antes de começar a prática.
          </p>
        </>
      ),
    },
    {
      id: 1,
      title: "Transporte de vítima no interior/exterior do auditório",
      content: (
        <div className="row">
          <div className="col-md-12">

            <div className="step-card mb-4 p-3 rounded" style={{ borderLeft: "4px solid #f39c12" }}>              <div className="row align-items-center">
              <div className="col-md-6 text-center">
                <img
                  src="/assets/tm.png"
                  alt="Passo 1: Fixar a cabeça da vítima"
                  className="img-fluid rounded shadow"
                  style={{ maxHeight: "250px" }}
                />
              </div>
              <div className="col-md-6">
                <div className="step-header d-flex align-items-center mb-3">
                  <div className="step-number me-3" style={{
                    width: "40px",
                    height: "40px",
                    backgroundColor: "#f39c12",
                    color: "white",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: "bold",
                    fontSize: "1.2rem"
                  }}>
                    1
                  </div>
                  <h4 style={{ color: "#f39c12", margin: 0 }}>Fixar a cabeça da vítima</h4>
                </div>
                <ul className="step-list" style={{ color: "#e9ecef", fontSize: "1.1rem", lineHeight: "1.7" }}>
                  <li className="mb-2 d-flex">
                    <span className="me-2">•</span>
                    <span>Verificar objetos que possam representar riscos (objetos pontiagudos, acessórios perigosos)</span>
                  </li>
                  <li className="mb-2 d-flex">
                    <span className="me-2">•</span>
                    <span>Certificar-se que o ambiente está seguro para o transporte</span>
                  </li>
                  <li className="d-flex">
                    <span className="me-2">•</span>
                    <span>Observar riscos adicionais (tráfego de veículos, incêndios próximos)</span>
                  </li>
                </ul>
              </div>
            </div>
            </div>

            <div className="step-card mb-4 p-3 rounded" style={{ backgroundColor: "rgba(209, 144, 39, 0.1)", borderLeft: "4px solid #f39c12" }}>              <div className="row align-items-center">

              <div className="col-md-6 order-md-2 text-center">
                <img
                  src="/assets/tm7.png"
                  alt="Passo 2: Alinhar o corpo da vítima"
                  className="img-fluid rounded shadow"
                  style={{ maxHeight: "250px" }}
                />
              </div>
              <div className="col-md-6 order-md-1">
                <div className="step-header d-flex align-items-center mb-3">
                  <div className="step-number me-3" style={{
                    width: "40px",
                    height: "40px",
                    backgroundColor: "#f39c12",
                    color: "white",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: "bold",
                    fontSize: "1.2rem"
                  }}>
                    2
                  </div>
                  <h4 style={{ color: "#f39c12", margin: 0 }}>Alinhar o corpo da vítima</h4>
                </div>
                <ul className="step-list" style={{ color: "#e9ecef", fontSize: "1.1rem", lineHeight: "1.7" }}>
                  <li className="mb-2 d-flex">
                    <span className="me-2">•</span>
                    <span>Posicionar a vítima em decúbito dorsal, numa posição estável.</span>
                  </li>
                  <li className="mb-2 d-flex">
                    <span className="me-2">•</span>
                    <span>Alinhar cabeça, pescoço e coluna para evitar lesões</span>
                  </li>
                  <li className="d-flex">
                    <span className="me-2">•</span>
                    <span>Evitar movimentos bruscos durante o manuseio</span>
                  </li>
                </ul>
              </div>
            </div>
            </div>

            <div className="step-card mb-4 p-3 rounded" style={{ borderLeft: "4px solid #f39c12" }}>
              <div className="row align-items-center">
                <div className="col-md-6 text-center">
                  <img
                    src="/assets/tm1.png"
                    alt="Passo 3: Posicionamento dos socorristas"
                    className="img-fluid rounded shadow"
                    style={{ maxHeight: "250px" }}
                  />
                </div>
                <div className="col-md-6">
                  <div className="step-header d-flex align-items-center mb-3">
                    <div className="step-number me-3" style={{
                      width: "40px",
                      height: "40px",
                      backgroundColor: "#f39c12",
                      color: "white",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: "bold",
                      fontSize: "1.2rem"
                    }}>
                      3
                    </div>
                    <h4 style={{ color: "#f39c12", margin: 0 }}>Posicionamento dos 5 socorristas</h4>
                  </div>
                  <ul className="step-list" style={{ color: "#e9ecef", fontSize: "1.1rem", lineHeight: "1.7" }}>
                    <li className="mb-2 d-flex">
                      <span className="me-2">•</span>
                      <span>Socorrista 1 – Responsável pela cabeça (voz de comando)</span>
                    </li>
                    <li className="mb-2 d-flex">
                      <span className="me-2">•</span>
                      <span>Socorrista 2 – Responsável pelos membros superiores</span>
                    </li>
                    <li className="d-flex">
                      <span className="me-2">•</span>
                      <span>Socorrista 3 – Responsável pelo tronco</span>
                    </li>
                    <li className="d-flex">
                      <span className="me-2">•</span>
                      <span>Socorrista 4 – Responsável pelos membros inferiores</span>
                    </li>
                    <li className="d-flex">
                      <span className="me-2">•</span>
                      <span>Socorrista 5 – Responsável pela maca</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="step-card mb-4 p-3 rounded" style={{ backgroundColor: "rgba(209, 144, 39, 0.1)", borderLeft: "4px solid #f39c12" }}>
              <div className="row align-items-center">
                <div className="col-md-6 order-md-2 text-center">
                  <img
                    src="/assets/tm3.png"
                    alt="Passo 4: Levantamento em bloco"
                    className="img-fluid rounded shadow"
                    style={{ maxHeight: "250px" }}
                  />
                </div>
                <div className="col-md-6 order-md-1">
                  <div className="step-header d-flex align-items-center mb-3">
                    <div className="step-number me-3" style={{
                      width: "40px",
                      height: "40px",
                      backgroundColor: "#f39c12",
                      color: "white",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: "bold",
                      fontSize: "1.2rem"
                    }}>
                      4
                    </div>
                    <h4 style={{ color: "#f39c12", margin: 0 }}>Levantamento em bloco</h4>
                  </div>
                  <ul className="step-list" style={{ color: "#e9ecef", fontSize: "1.1rem", lineHeight: "1.7" }}>
                    <li className="mb-2 d-flex">
                      <span className="me-2">•</span>
                      <span>Manter alinhamento cabeça-pescoço-coluna durante todo o movimento</span>
                    </li>
                    <li className="mb-2 d-flex">
                      <span className="me-2">•</span>
                      <span>Socorristas 2,3 e 4 devem apoiar-se com o ombro, uns nos outros</span>
                    </li>
                    <li className="d-flex">
                      <span className="me-2">•</span>
                      <span>Manter a vítima estável durante todo o procedimento</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="step-card mb-4 p-3 rounded" style={{ borderLeft: "4px solid #f39c12" }}>
              <div className="row align-items-center">
                <div className="col-md-6 text-center">
                  <img
                    src="/assets/tm2.png"
                    alt="Passo 5: Introdução da maca"
                    className="img-fluid rounded shadow"
                    style={{ maxHeight: "250px" }}
                  />
                </div>
                <div className="col-md-6">
                  <div className="step-header d-flex align-items-center mb-3">
                    <div className="step-number me-3" style={{
                      width: "40px",
                      height: "40px",
                      backgroundColor: "#f39c12",
                      color: "white",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: "bold",
                      fontSize: "1.2rem"
                    }}>
                      5
                    </div>
                    <h4 style={{ color: "#f39c12", margin: 0 }}>Introdução da maca</h4>
                  </div>
                  <ul className="step-list" style={{ color: "#e9ecef", fontSize: "1.1rem", lineHeight: "1.7" }}>
                    <li className="mb-2 d-flex">
                      <span className="me-2">•</span>
                      <span>O Socorrista 5 posiciona a maca alinhado com os pés da vítima alinhado</span>
                    </li>
                    <li className="mb-2 d-flex">
                      <span className="me-2">•</span>
                      <span>Deslizar a maca suavemente por baixo da vítima</span>
                    </li>
                    <li className="d-flex">
                      <span className="me-2">•</span>
                      <span>Garantir que a maca esteja centralizada sob o corpo</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="step-card mb-4 p-3 rounded" style={{ backgroundColor: "rgba(209, 144, 39, 0.1)", borderLeft: "4px solid #f39c12" }}>
              <div className="row align-items-center">
                <div className="col-md-6 order-md-2 text-center">
                  <img
                    src="/assets/tm8.png"
                    alt="Passo 6: Abaixar em bloco"
                    className="img-fluid rounded shadow"
                    style={{ maxHeight: "250px" }}
                  />
                </div>
                <div className="col-md-6 order-md-1">
                  <div className="step-header d-flex align-items-center mb-3">
                    <div className="step-number me-3" style={{
                      width: "40px",
                      height: "40px",
                      backgroundColor: "#f39c12",
                      color: "white",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: "bold",
                      fontSize: "1.2rem"
                    }}>
                      6
                    </div>
                    <h4 style={{ color: "#f39c12", margin: 0 }}>Baixar em bloco</h4>
                  </div>
                  <ul className="step-list" style={{ color: "#e9ecef", fontSize: "1.1rem", lineHeight: "1.7" }}>
                    <li className="mb-2 d-flex">
                      <span className="me-2">•</span>
                      <span>Baixar simultaneamente ao comando do socorrista 1.</span>
                    </li>
                    <li className="d-flex">
                      <span className="me-2">•</span>
                      <span>Coordenar movimento com os demais socorristas</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="step-card mb-4 p-3 rounded" style={{ borderLeft: "4px solid #f39c12" }}>
              <div className="row align-items-center">
                <div className="col-md-6 text-center">
                  <img
                    src="/assets/tm13.jpg"
                    alt="Passo 7: Colar cintas"
                    className="img-fluid rounded shadow"
                    style={{ maxHeight: "250px" }}
                  />
                </div>
                <div className="col-md-6">
                  <div className="step-header d-flex align-items-center mb-3">
                    <div className="step-number me-3" style={{
                      width: "40px",
                      height: "40px",
                      backgroundColor: "#f39c12",
                      color: "white",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: "bold",
                      fontSize: "1.2rem"
                    }}>
                      7
                    </div>
                    <h4 style={{ color: "#f39c12", margin: 0 }}>Colar cintas de segurança</h4>
                  </div>
                  <ul className="step-list" style={{ color: "#e9ecef", fontSize: "1.1rem", lineHeight: "1.7" }}>
                    <li className="mb-2 d-flex">
                      <span className="me-2">•</span>
                      <span>Verificar o correto posicionamento das cintas</span>
                    </li>
                    <li className="mb-2 d-flex">
                      <span className="me-2">•</span>
                      <span>Ajustar conforme o biótipo corporal da vítima</span>
                    </li>
                    <li className="d-flex">
                      <span className="me-2">•</span>
                      <span>Garantir fixação sem comprometer a circulação</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="step-card mb-4 p-3 rounded" style={{ backgroundColor: "rgba(209, 144, 39, 0.1)", borderLeft: "4px solid #f39c12" }}>
              <div className="row align-items-center">
                <div className="col-md-6 order-md-2 text-center">
                  <img
                    src="/assets/tm9.png"
                    alt="Passo 8: Emparelhar socorristas"
                    className="img-fluid rounded shadow"
                    style={{ maxHeight: "250px" }}
                  />
                </div>
                <div className="col-md-6 order-md-1">
                  <div className="step-header d-flex align-items-center mb-3">
                    <div className="step-number me-3" style={{
                      width: "40px",
                      height: "40px",
                      backgroundColor: "#f39c12",
                      color: "white",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: "bold",
                      fontSize: "1.2rem"
                    }}>
                      8
                    </div>
                    <h4 style={{ color: "#f39c12", margin: 0 }}>Emparelhar socorristas</h4>
                  </div>
                  <ul className="step-list" style={{ color: "#e9ecef", fontSize: "1.1rem", lineHeight: "1.7" }}>
                    <li className="mb-2 d-flex">
                      <span className="me-2">•</span>
                      <span>Posicionar socorristas de altura similar</span>
                    </li>
                    <li className="mb-2 d-flex">
                      <span className="me-2">•</span>
                      <span>Os socorristas lado a lado com a mão fechada verificam se as mãos ficam à mesma
                        altura</span>
                    </li>

                  </ul>
                </div>
              </div>
            </div>

            <div className="step-card mb-4 p-3 rounded" style={{ borderLeft: "4px solid #f39c12" }}>
              <div className="row align-items-center">
                <div className="col-md-6 text-center">
                  <img
                    src="/assets/tm5.png"
                    alt="Passo 9: Levantamento com flexão"
                    className="img-fluid rounded shadow"
                    style={{ maxHeight: "250px" }}
                  />
                </div>
                <div className="col-md-6">
                  <div className="step-header d-flex align-items-center mb-3">
                    <div className="step-number me-3" style={{
                      width: "40px",
                      height: "40px",
                      backgroundColor: "#f39c12",
                      color: "white",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: "bold",
                      fontSize: "1.2rem"
                    }}>
                      9
                    </div>
                    <h4 style={{ color: "#f39c12", margin: 0 }}>Levantamento dos socorristas</h4>
                  </div>
                  <ul className="step-list" style={{ color: "#e9ecef", fontSize: "1.1rem", lineHeight: "1.7" }}>
                    <li className="mb-2 d-flex">
                      <span className="me-2">•</span>
                      <span>Manter coluna vertebral alinhada</span>
                    </li>
                    <li className="mb-2 d-flex">
                      <span className="me-2">•</span>
                      <span>Utilizar força das pernas para levantar</span>
                    </li>
                    <li className="d-flex">
                      <span className="me-2">•</span>
                      <span>Evitar torções ou movimentos bruscos</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="step-card mb-4 p-3 rounded" style={{ backgroundColor: "rgba(209, 144, 39, 0.1)", borderLeft: "4px solid #f39c12" }}>
              <div className="row align-items-center">
                <div className="col-md-6 order-md-2 text-center">
                  <img
                    src="/assets/tm10.png"
                    alt="Passo 10: Preparar avanço"
                    className="img-fluid rounded shadow"
                    style={{ maxHeight: "250px" }}
                  />
                </div>
                <div className="col-md-6 order-md-1">
                  <div className="step-header d-flex align-items-center mb-3">
                    <div className="step-number me-3" style={{
                      width: "40px",
                      height: "40px",
                      backgroundColor: "#f39c12",
                      color: "white",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: "bold",
                      fontSize: "1.2rem"
                    }}>
                      10
                    </div>
                    <h4 style={{ color: "#f39c12", margin: 0 }}>Preparar para avançar</h4>
                  </div>
                  <div className="alert alert-warning mt-3">
                    <strong>Comando final:</strong> à ordem do socorrista 1, responsável pela cabeça, avançam sempre para a frente
                  </div>
                </div>
              </div>
            </div>

            <div className="alert alert-warning mt-4">
              <strong>Nota:</strong> Todos os movimentos devem ser coordenados e sincronizados entre os socorristas, seguindo os comandos do responsável pela cabeça.
            </div>
          </div>
        </div>
      )
    },
    {
      id: 2,
      title: "Transporte de vítima em escadas",
      content: (
        <div className="row">
          <div className="col-md-12">

            <div className="step-card mb-4 p-3 rounded" style={{ backgroundColor: "rgba(243, 156, 18, 0.1)", borderLeft: "4px solid #f39c12" }}>
              <div className="row align-items-center">
                <div className="col-md-6 text-center">
                  <img
                    src="/assets/tm12.jpg"
                    alt="Posicionamento inicial"
                    className="img-fluid rounded shadow"
                    style={{ maxHeight: "250px" }}
                  />
                </div>
                <div className="col-md-6">
                  <div className="step-header d-flex align-items-center mb-3">
                    <div className="step-number me-3" style={{
                      width: "40px",
                      height: "40px",
                      backgroundColor: "#f39c12",
                      color: "white",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: "bold",
                      fontSize: "1.2rem"
                    }}>
                      1
                    </div>
                    <h4 style={{ color: "#f39c12", margin: 0 }}>Subir/Descer escadas </h4>
                  </div>
                  <ul className="step-list" style={{ color: "#e9ecef", fontSize: "1.1rem", lineHeight: "1.7" }}>
                    <li className="mb-2 d-flex">
                      <span className="me-2">•</span>
                      <span>A cabeça da vítima tem de estar sempre na direção da subida ou descida</span>
                    </li>
                    <li className="mb-2 d-flex">
                      <span className="me-2">•</span>
                      <span>Socorristas aos pés da vítima sobem/descem 3 degraus</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>


            <div className="step-card mb-4 p-3 rounded">
              <div className="row align-items-center">
                <div className="col-md-6 order-md-2 text-center">
                  <img
                    src="/assets/tm14.jpg"
                    alt="Movimento de subida"
                    className="img-fluid rounded shadow"
                    style={{ maxHeight: "250px" }}
                  />
                </div>
                <div className="col-md-6 order-md-1">
                  <div className="step-header d-flex align-items-center mb-3">
                    <div className="step-number me-3" style={{
                      width: "40px",
                      height: "40px",
                      backgroundColor: "#f39c12",
                      color: "white",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: "bold",
                      fontSize: "1.2rem"
                    }}>
                      2
                    </div>
                    <h4 style={{ color: "#f39c12", margin: 0 }}>Nivelação de maca </h4>
                  </div>
                  <ul className="step-list" style={{ color: "#e9ecef", fontSize: "1.1rem", lineHeight: "1.7" }}>
                    <li className="mb-2 d-flex">
                      <span className="me-2">•</span>
                      <span>Na descida, os socorristas aos pés da vítima colocam a pega da maca no antebraço</span>
                    </li>
                    <li className="mb-2 d-flex">
                      <span className="me-2">•</span>
                      <span>Na subida, os socorristas à cabeça da vítima colocam a pega da maca no antebraço</span>
                    </li>
                    <li className="d-flex">
                      <span className="me-2">•</span>
                      <span>À voz do socorrista responsável pela cabeça iniciam a subida/descida</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="step-card mb-4 p-3 rounded" style={{ backgroundColor: "rgba(243, 156, 18, 0.1)", borderLeft: "4px solid #f39c12" }}>
              <div className="row align-items-center">
                <div className="col-md-6 text-center">
                  <img
                    src="/assets/tm11.jpg"
                    alt="Controle de descida"
                    className="img-fluid rounded shadow"
                    style={{ maxHeight: "250px" }}
                  />
                </div>
                <div className="col-md-6">
                  <div className="step-header d-flex align-items-center mb-3">
                    <div className="step-number me-3" style={{
                      width: "40px",
                      height: "40px",
                      backgroundColor: "#f39c12",
                      color: "white",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: "bold",
                      fontSize: "1.2rem"
                    }}>
                      3
                    </div>
                    <h4 style={{ color: "#f39c12", margin: 0 }}>Controle na subida/descida</h4>
                  </div>
                  <ul className="step-list" style={{ color: "#e9ecef", fontSize: "1.1rem", lineHeight: "1.7" }}>
                    <li className="mb-2 d-flex">
                      <span className="me-2">•</span>
                      <span>Descer/subir os degraus lentamente para poderem estar sincronizados.
                      </span>
                    </li>
                    <li className="mb-2 d-flex">
                      <span className="me-2">•</span>
                      <span>Colocar um pé de cada vez em cada degrau para dar segurança ao movimento e evitar
                        tropeços.
                      </span>
                    </li>
                    <li className="d-flex">
                      <span className="me-2">•</span>
                      <span>Se existir, segurar corrimão com uma das mãos para ter mais estabilidade.</span>
                    </li>
                    <li className="d-flex">
                      <span className="me-2">•</span>
                      <span>Evitar movimentos bruscos para não destabilizar a maca.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="alert alert-warning mt-4">
              <strong>Nota:</strong> Priorizar sempre a segurança da equipe e da vítima, utilizar equipamentos de proteção individual quando necessário.
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="exercise-page">
      <header className="py-4" style={{ backgroundColor: "#2c3e50", color: "#fff" }}>
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <h1 className="m-0" style={{ fontSize: "1.8rem", fontWeight: "700" }}>SAV</h1>
            <p className="mt-2 mb-0" style={{ fontSize: "1.1rem", color: "#ecf0f1" }}>
            Transporte vítima em Maca<br />
          </p>
          </div>
        </div>
      </header>

      <main className="container py-5">
        <div className="text-center mb-5">
          <h2
            style={{
              fontSize: "2.5rem",
              fontWeight: "700",
              color: "black",
              marginBottom: "1rem",
            }}
          >
            Transporte em Maca
          </h2>
          <div
            className="mx-auto"
            style={{ width: "50px", height: "3px", backgroundColor: "#f39c12", marginBottom: "1.5rem" }}
          ></div>
          <p style={{ fontSize: "1.2rem", color: "black" }}>
            Transporte de vítimas em diversas situações
          </p>
        </div>

        <div className="row">
          <div className="col-lg-10 mx-auto">
            {steps.map((step) => (
              <section
                key={step.id}
                className="mb-5 p-4 rounded"
                style={{ backgroundColor: "#343a40" }}
              >
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
              <h4
                style={{
                  fontSize: "1.2rem",
                  fontWeight: "600",
                  textAlign: "center",
                  marginBottom: "1.5rem",
                  color: "#ecf0f1",
                }}
              >
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
                      Preparar a vítima e o ambiente
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
                      Posicionar os socorristas corretamente
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
                      3
                    </div>
                    <p className="m-0" style={{ fontSize: "0.9rem", fontWeight: "400", color: "#ecf0f1" }}>
                      Realizar o levantamento em bloco
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
                      4
                    </div>
                    <p className="m-0" style={{ fontSize: "0.9rem", fontWeight: "400", color: "#ecf0f1" }}>
                      Posicionar a vítima na maca com segurança
                    </p>
                  </div>
                </div>
              </div>

              <p
                style={{
                  fontSize: "1.1rem",
                  lineHeight: "1.7",
                  color: "#e9ecef",
                  marginBottom: "1.5rem",
                  textAlign: "center",
                }}
              >
                <strong>Lembrete:</strong> Todos os movimentos devem ser coordenados pelo socorrista responsável pela cabeça.
              </p>
              <div className="text-center">
                <Button
                  onClick={() => setShowModal(true)}
                  style={{
                    backgroundColor: "#f39c12",
                    border: "none",
                    borderRadius: "4px",
                    padding: "0.75rem 2.5rem",
                    fontSize: "1.1rem",
                    fontWeight: "600",
                  }}
                >
                  Registrar Conclusão
                </Button>
              </div>
            </section>
          </div>
        </div>
      </main>

      <footer className="border-top py-4" style={{ backgroundColor: "#F9F9F9" }}>
        <div className="container text-center">
          <p style={{ fontSize: "0.9rem", color: "#757575" }}>
            © {new Date().getFullYear()} SAV. <br />Todos os direitos reservados.
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
                      cursor: "pointer",
                      marginRight: "10px",
                    }}
                  />
                  <label
                    className="form-check-label fw-semibold"
                    htmlFor="flexSwitchCheckChecked"
                    style={{
                      color: formData.concluido ? "#2ecc71" : "#34495e",
                      fontSize: "1.05rem",
                      transition: "color 0.3s ease",
                      userSelect: "none",
                      cursor: "pointer",
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
                >
                  <i className="bi bi-send-check me-2"></i>
                  Enviar
                </Button>
              </div>
            </Form>
          ) : (
            <div className="text-center py-4 px-3">
              <div className="mb-4">
                <i
                  className="bi bi-check-circle-fill"
                  style={{
                    fontSize: '4rem',
                    color: '#2ecc71',
                  }}
                  aria-hidden="true"
                ></i>
              </div>

              <h5 className="fw-bold mb-3" style={{ color: '#34495e' }}>
                Exercício concluído com sucesso!
              </h5>

              <p className="text-muted mb-4">
                Obrigado por completar o exercício.
              </p>

              <Button
                onClick={handleModalClose}
                className="fw-semibold rounded-3"
                style={{
                  backgroundColor: '#2c3e50',
                  color: '#ecf0f1',
                  border: 'none',
                  padding: '0.75rem 2rem',
                  width: '100%',
                  maxWidth: '300px',
                  transition: 'background-color 0.3s ease',
                }}
                onMouseEnter={(e) => (e.target.style.backgroundColor = '#34495e')}
                onMouseLeave={(e) => (e.target.style.backgroundColor = '#2c3e50')}
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
