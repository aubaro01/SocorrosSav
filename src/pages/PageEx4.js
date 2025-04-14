import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button, Form } from "react-bootstrap";
import axios from 'axios';
import { useState, useEffect } from 'react';


export default function PageEx4() {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    circuito: "",
    concluido: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const exercicioId = process.env.REACT_APP_EXER4_ID;
  if (!exercicioId) {
    console.error("REACT_APP_EXER4_ID não está definido no ambiente");
  }

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
      setSubmitted(true);
    } catch (err) {
      let errorMessage = "Erro ao enviar dados";
      if (err.response) {
        errorMessage = err.response.data?.message ||
          `Erro ${err.response.status}: ${err.response.statusText}`;
      } else if (err.request) {
        errorMessage = "Sem resposta do servidor";
      }
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
              src="https://drive.google.com/file/d/1Zgxj_U9-lCpL6SPoaAr-Uqs8jv1rVVtX/preview"
              title="Vídeo demonstrativo do exercício"
              allowFullScreen
              allow="autoplay"
              sandbox="allow-scripts allow-same-origin allow-forms"
            ></iframe>

          </div>
          <p style={{ fontSize: "1.1rem", lineHeight: "1.7", color: "#e9ecef" }}>
            Assista ao vídeo para conhecer a técnica correta.
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
              Dobre os joelhos e quadris, abaixando o corpo como se fosse sentar em uma cadeira invisível.
            </p>
            <ul style={{ fontSize: "1.1rem", lineHeight: "1.7", color: "#e9ecef" }}>
              <li className="mb-2">Mantenha o peito erguido</li>
              <li className="mb-2">Coluna em posição neutra</li>
              <li className="mb-2">Joelhos alinhados com os pés</li>
              <li>Não ultrapasse a linha dos dedos com os joelhos</li>
            </ul>
          </div>
          <div className="col-md-6 text-center">
            <img
              src="/assets/sbv1.png"
              alt="Agachamento"
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
            <p style={{ fontSize: "1.1rem", lineHeight: "1.7", color: "#e9ecef", marginBottom: "2rem" }}>
              Para o transporte de uma vítima inconsciente, siga os passos:
            </p>

            {/* Passo 1 - Avaliar */}
            <div className="row mb-4 align-items-center">
              <div className="col-md-6 text-center">
                <img
                  src="/assets/sbv2.png"
                  alt="Passo 1: Avaliar a vítima"
                  className="img-fluid rounded"
                  style={{ maxHeight: "250px", border: "3px solid #f39c12" }}
                />
              </div>
              <div className="col-md-6">
                <h4 style={{ color: "#f39c12", marginBottom: "1rem" }}>Passo 1 - Avaliar</h4>
                <ul style={{ fontSize: "1.1rem", lineHeight: "1.7", color: "#e9ecef" }}>
                  <li className="mb-2">
                    Verifique se a vítima está usando algo que possa colocá-la em perigo.
                  </li>
                  <li className="mb-2">
                    Certifique-se de que o ambiente é seguro para o transporte.
                  </li>
                  <li>
                    Observe riscos como tráfego ou incêndio.
                  </li>
                </ul>
              </div>
            </div>

            {/* Passo 2 - Posicionar */}
            <div className="row mb-4 align-items-center">
              <div className="col-md-6 text-center order-md-2">
                <img
                  src="/assets/sbv3.png"
                  alt="Passo 2: Posicionar a vítima"
                  className="img-fluid rounded"
                  style={{ maxHeight: "250px", border: "3px solid #f39c12" }}
                />
              </div>
              <div className="col-md-6 order-md-1">
                <h4 style={{ color: "#f39c12", marginBottom: "1rem" }}>Passo 2 - Posicionar</h4>
                <ul style={{ fontSize: "1.1rem", lineHeight: "1.7", color: "#e9ecef" }}>
                  <li className="mb-2">Coloque a vítima em uma posição estável, deitada de costas.</li>
                  <li className="mb-2">Certifique-se do alinhamento da cabeça, pescoço e coluna.</li>
                  <li>Evite movimentos bruscos.</li>
                </ul>
              </div>
            </div>

            {/* Passo 3 - Transportar */}
            <div className="row mb-4 align-items-center">
              <div className="col-md-6 text-center">
                <img
                  src="/assets/sbv4.png"
                  alt="Passo 3: Transportar a vítima"
                  className="img-fluid rounded"
                  style={{ maxHeight: "250px", border: "3px solid #f39c12" }}
                />
              </div>
              <div className="col-md-6">
                <h4 style={{ color: "#f39c12", marginBottom: "1rem" }}>Passo 3 - Transportar</h4>
                <ul style={{ fontSize: "1.1rem", lineHeight: "1.7", color: "#e9ecef" }}>
                  <li className="mb-2">Utilize técnicas adequadas, como o arrastamento ou dois socorristas.</li>
                  <li className="mb-2">Mantenha a vítima estável durante o transporte.</li>
                  <li>Leve a vítima para um local seguro ou aguarde socorro profissional.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 3,
      title: "Posição Inicial",
      content: (
        <>
          <div className="text-center mb-4">
            <img
              src="/assets/sbv7.png"
              alt="Posição Inicial"
              className="img-fluid rounded"
              style={{ maxHeight: "350px", border: "3px solid #f39c12" }}
            />
          </div>
          <p style={{ fontSize: "1.1rem", lineHeight: "1.7", color: "#e9ecef" }}>
            Fique em pé com os pés afastados na largura dos ombros e braços relaxados. Essa é a base para um bom agachamento e estabilidade.
          </p>
        </>
      ),
    },

  ];

  return (
    <div className="exercise-page">
      <header className="py-4" style={{ backgroundColor: "#2c3e50", color: "#fff" }}>
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <h1 className="m-0" style={{ fontSize: "1.8rem", fontWeight: "700" }}>SAV</h1>
            <div className="py-1 px-3" style={{ border: "1px solid rgba(31, 26, 26, 0.3)", borderRadius: "4px" }}>
              Exercício SBV
            </div>
          </div>
          <p className="mt-2 mb-0" style={{ fontSize: "1.1rem", color: "#ecf0f1" }}>
            Suporte Básico de Vida (SBV)
          </p>
        </div>
      </header>

      <main className="container py-5">
        <div className="text-center mb-5">
          <h2 style={{ fontSize: "2.5rem", fontWeight: "700", color: "black", marginBottom: "1rem" }}>
            Suporte Básico de Vida
          </h2>
          <div
            className="mx-auto"
            style={{ width: "50px", height: "3px", backgroundColor: "#f39c12", marginBottom: "1.5rem" }}
          ></div>
          <p style={{ fontSize: "1.2rem", color: "black" }}>
            Lições para avaliar e transportar vítimas com segurança.
          </p>
        </div>

        {steps.map((step) => (
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
            Resumo do Exercício
          </h4>
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
          {/* Mensagem de erro */}
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
                  Nome  <span className="text-danger">*</span>
                </Form.Label>
                <Form.Control
                  type="text"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  placeholder="Digite seu nome usado no registro"
                  required
                  className="p-3 rounded-3"
                  style={{ border: '2px solid #dfe6e9', fontSize: '1.05rem' }}
                  disabled={isLoading}
                />
                {!formData.nome && (
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
                  required
                  className="p-3 rounded-3"
                  style={{ border: '2px solid #dfe6e9', fontSize: '1.05rem' }}
                  disabled={isLoading}
                />
                {!formData.circuito && (
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
                        Exercício concluído
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
                    boxShadow: '0 4px 6px rgba(39, 174, 96, 0.2)',
                    opacity: isLoading ? 0.8 : 1
                  }}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                      Enviar...
                    </>
                  ) : (
                    <>
                      <i className="bi bi-send-check me-2"></i>
                      Enviar Registro
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
                Registro concluído com sucesso!
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
