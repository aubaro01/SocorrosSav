import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button, Form } from "react-bootstrap";
import axios from 'axios';
import { useState, useEffect } from 'react';
import Inem from "../components/ChInem";

export default function PageEx2() {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    circuito: "",
    concluido: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [exercicioNome] = useState("RVA");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const exercicioId = process.env.REACT_APP_EXER2_ID;


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
              src="https://drive.google.com/file/d/1Xu8e10-q4nnZmxmdtWw5-jkiJvk-1V0C/preview"
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
      title: "Remoção de Vítimas no Auditório",
      content: (
        <div className="row">
          <div className="col-12 mb-5">
            <h4 className="text-warning mb-3">1.1) Vítima Consciente</h4>
            <div className="row align-items-center">
              <div className="col-md-6 text-center">
                <img
                  src="/assets/rva.png"
                  alt="Vítima consciente no auditório"
                  className="img-fluid rounded"
                  style={{ maxHeight: "350px", border: "3px solid #f39c12" }}
                />
              </div>
              <div className="col-md-6">
                <p style={{ fontSize: "1.1rem", lineHeight: "1.7", color: "#e9ecef" }}>
                  Avaliar, incentivar e auxiliar no transporte com cadeira de rodas.
                </p>
                <ul style={{ fontSize: "1.1rem", lineHeight: "1.7", color: "#e9ecef" }}>
                   <li className="mb-2">Conversar com a vítima.</li>
                  <li className="mb-2">Mover a vítima em segurança.</li>
                  <p className="text-warning mt-2">
                    <em>Peça que os irmãos deixem o lugar dessa forma, para poder realizar com segurança.</em>
                  </p>
                  <li className="mb-2">Colocar a vítima na cadeira de rodas de forma adequada.</li>
                  <li className="mb-2">Verificar se ela está segura na cadeira antes de iniciar o transporte.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-12 mb-5">
            <h4 className="text-warning mb-3">1.2) Vítima Inconsciente</h4>
            <div className="row align-items-center">
              <div className="col-md-6 text-center">
                <img
                  src="/assets/rva1.png"
                  alt="Vítima consciente no auditório"
                  className="img-fluid rounded"
                  style={{ maxHeight: "350px", border: "3px solid #f39c12" }}
                />
              </div>
              <div className="col-md-6">
                <p style={{ fontSize: "1.1rem", lineHeight: "1.7", color: "#e9ecef" }}>
                  Verifique se a vítima está com objetos que possam representar riscos (ex.: objetos pontiagudos ou acessórios perigosos).
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 2,
      title: "Vítima Inconsciente - Chave de Rautek",
      content: (
        <div className="row">
          <div className="col-md-12">
            <p style={{ fontSize: "1.1rem", lineHeight: "1.7", color: "#e9ecef", marginBottom: "2rem" }}>
              Para a Remoção de uma vítima inconsciente no Auditório, siga os cuidados descritos abaixo:
            </p>

            <div className="step-card mb-4 p-3 rounded" style={{ backgroundColor: "rgba(209, 144, 39, 0.1)", borderLeft: "4px solid #f39c12" }}>
              <div className="row align-items-center">
                <div className="col-md-6">
                  <h4 className="text-warning mb-3">Passo 1 - Segurar</h4>
                  <ul className="fs-5 lh-lg text-light">
                    <li className="mb-2 text-break">Passe seu braço direito por trás do ombro direito da vítima e por baixo da axila.</li>
                    <li className="mb-2 text-break">Com a mão esquerda, segure a cabeça da vítima encostada na sua, para manter o pescoço firme.</li>
                    <li className="mb-2 text-break">Com sua mão direita, segure o outro braço da vítima.</li>
                  </ul>
                </div>
                <div className="col-md-6 text-center">
                  <img
                    src="/assets/rva2.png"
                    alt="Passo 1: Avaliar"
                    className="img-fluid rounded shadow"
                    style={{ maxHeight: "250px", border: "3px solid #f39c12" }}
                  />
                  <img
                  src="/assets/rva3.png"
                  alt="Passo 2: Posicionar a vítima"
                  className="img-fluid rounded shadow"
                  style={{ maxHeight: "250px", border: "3px solid #f39c12" }}
                />
              </div>
              </div>
            </div>

            <div className="row mb-4 align-items-center">
              <div className="col-md-6 order-md-1">
                <h4 style={{ color: "#f39c12", marginBottom: "1rem" }}>Passo 2 - Levantar</h4>
                <ul style={{ fontSize: "1.1rem", lineHeight: "1.7", color: "#e9ecef" }}>
                  <li className="mb-2">####</li>
                  <li className="mb-2">####</li>
                  <li>####</li>
                </ul>
              </div>
              <div className="col-md-6 text-center">
                <img
                  src="/assets/rva4.png"
                  alt="Passo 3: Transportar a vítima"
                  className="img-fluid rounded"
                  style={{ maxHeight: "250px", border: "3px solid #f39c12" }}
                />
              </div>
              
            </div>

            <div className="step-card mb-4 p-3 rounded" style={{ backgroundColor: "rgba(209, 144, 39, 0.1)", borderLeft: "4px solid #f39c12" }}>
              <div className="row align-items-center">
                <div className="col-md-6">
                  <h4 className="text-warning mb-3">Passo 3 - Pousar</h4>
                  <ul className="fs-5 lh-lg text-light">
                    <li className="mb-2 text-break">#####</li>
                    <li className="mb-2 text-break">#####</li>
                    <li className="mb-2 text-break">#####</li>
                  </ul>
                </div>
                <div className="col-md-6 text-center">
                <img
                  src="/assets/rva6.png"
                  alt="Passo 2: Posicionar a vítima"
                  className="img-fluid rounded shadow"
                  style={{ maxHeight: "250px", border: "3px solid #f39c12" }}
                />
                  <img
                    src="/assets/rva5.png"
                    alt="Passo 1: Avaliar"
                    className="img-fluid rounded shadow"
                    style={{ maxHeight: "250px", border: "3px solid #f39c12" }}
                  /> 
              </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 3,
      title: "Transporte de vítima inconsciente",
      content: (
        <div className="row align-items-center">
          <div className="col-md-6 text-center mb-4 mb-md-0">
            <img
              src="/assets/rva7.png"
              alt="Salto"
              className="img-fluid rounded"
              style={{ maxHeight: "350px", border: "3px solid #f39c12" }}
            />
          </div>
          <div className="col-md-6">
            <p style={{ fontSize: "1.1rem", lineHeight: "1.7", color: "#e9ecef" }}>
              <strong>Se houver perigo,</strong> arraste a vítima para um local seguro enquanto aguarda a Maca para o transporte.
            </p>
            <p style={{ fontSize: "1.1rem", lineHeight: "1.7", color: "#e9ecef" }}>
              Utilize a <strong>chave de Rautek</strong> para mover a vítima até um local seguro.
            </p>
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
            <h1 className="m-0" style={{ fontSize: "1.8rem", fontWeight: "700" }}>S.A.V</h1>
            <div className="py-1 px-3" style={{ border: "1px solid rgba(31, 26, 26, 0.3)", borderRadius: "4px" }}>
              Exercício 2
            </div>
          </div>
          <p className="mt-2 mb-0" style={{ fontSize: "1.1rem", color: "#ecf0f1" }}>
            Remoção de Vítima no Auditório<br></br>
          </p>
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
            Remoção de Vítima no Auditório
          </h2>
          <div
            className="mx-auto"
            style={{ width: "50px", height: "3px", backgroundColor: "#f39c12", marginBottom: "1.5rem" }}
          ></div>
          <p style={{ fontSize: "1.2rem", color: "black" }}>
            Retirada de vítima Consciente e Inconsciente do auditório.
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

            <div className="text-center my-5 p-5 bg-light border border-2 border-warning rounded-4 shadow-lg">
              <h3 className="mb-4 fw-bold text-danger">
                <i className="bi bi-exclamation-triangle-fill me-2"></i>
                Emergência Médica - 112
              </h3>
              <p className="mb-4 text-dark">Clique no botão abaixo para mais detalhes do exercício</p>
              <p className="mb-4 text-dark">👇</p>

              <div className="d-flex justify-content-center mb-4">
                <Inem />
              </div>

              <p className="mt-3 small text-muted">
                <strong>Exercício de chamada à emergência médica.</strong>
              </p>
            </div>


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
                      Assistir ao vídeo demonstrativo
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
                      Posicionar-se corretamente
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
                      Realizar o agachamento
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
                      Executar o salto explosivo
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
                <strong>Conclusão do Exercício</strong>
              </p>
            </section>
          </div>
        </div>
      </main>

      <footer className="border-top py-4" style={{ backgroundColor: "#F9F9F9" }}>
        <div className="container text-center">
          <p style={{ fontSize: "0.9rem", color: "#757575" }}>
            © {new Date().getFullYear()} S.A.V. <br></br>Todos os direitos reservados.
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
