import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button, Form } from "react-bootstrap";
import Inem from "../components/ChInem";

export default function PageEx4() {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    circuito: "",
    concluido: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Dados enviados:", formData);
    setSubmitted(true);
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
      title: "Vítima Consciente",
      content: (
        <div className="row align-items-center">
          <div className="col-md-6 text-center">
            <img
              src="/assets/rva.png"
              alt="vítima dentro do auditorio"
              className="img-fluid rounded"
              style={{ maxHeight: "350px", border: "3px solid #f39c12" }} />
          </div>
          <div className="col-md-6">
            <p style={{ fontSize: "1.1rem", lineHeight: "1.7", color: "#e9ecef" }}>
              Avaliar, incentivar e auxiliar no transporte com cadeira de rodas.
            </p>
            <ul style={{ fontSize: "1.1rem", lineHeight: "1.7", color: "#e9ecef" }}>
              <li className="mb-2">Levante a vítima com segurança.</li>
              <li className="mb-2">Coloque-a na cadeira de rodas de forma adequada.</li>
              <li className="mb-2">Verifique se ela está segura na cadeira antes de iniciar o transporte.</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: 2,
      title: "Vítima Inconsciente",
      content: (
        <div className="row">
          <div className="col-md-12">
            <p style={{ fontSize: "1.1rem", lineHeight: "1.7", color: "#e9ecef", marginBottom: "2rem" }}>
              Para o transporte de uma vítima inconsciente, siga os cuidados descritos abaixo:
            </p>

            {/* Passo 1 - Avaliação */}
            <div className="row mb-4 align-items-center">
              <div className="col-md-6 text-center">
                <img
                  src="/assets/rva1.png"
                  alt="Passo 1: Avaliar a vítima"
                  className="img-fluid rounded"
                  style={{ maxHeight: "250px", border: "3px solid #f39c12" }}
                />
              </div>
              <div className="col-md-6">
                <h4 style={{ color: "#f39c12", marginBottom: "1rem" }}>Passo 1 - Avaliação</h4>
                <ul style={{ fontSize: "1.1rem", lineHeight: "1.7", color: "#e9ecef" }}>
                  <li className="mb-2">Verifique se a vítima está com objetos que possam representar riscos (ex.: objetos pontiagudos ou acessórios perigosos).</li>
                  <li className="mb-2">Certifique-se de que o ambiente está seguro para realizar o transporte.</li>
                  <li>Observe riscos adicionais, como tráfego de veículos ou incêndios próximos.</li>
                </ul>
              </div>
            </div>

            {/* Passo 2 - Posicionamento */}
            <div className="row mb-4 align-items-center">
              <div className="col-md-6 text-center order-md-2">
                <img
                  src="/assets/rva2.png"
                  alt="Passo 2: Posicionar a vítima"
                  className="img-fluid rounded"
                  style={{ maxHeight: "250px", border: "3px solid #f39c12" }}
                />
              </div>
              <div className="col-md-6 order-md-1">
                <h4 style={{ color: "#f39c12", marginBottom: "1rem" }}>Passo 2 - Posicionamento</h4>
                <ul style={{ fontSize: "1.1rem", lineHeight: "1.7", color: "#e9ecef" }}>
                  <li className="mb-2">Coloque a vítima em uma posição estável, de preferência deitada de costas.</li>
                  <li className="mb-2">Alinhe a cabeça, o pescoço e a coluna da vítima para evitar lesões adicionais.</li>
                  <li>Evite movimentos bruscos durante o manuseio para prevenir complicações.</li>
                </ul>
              </div>
            </div>

            {/* Passo 3 - Transporte */}
            <div className="row mb-4 align-items-center">
              <div className="col-md-6 text-center">
                <img
                  src="/assets/rva4.png"
                  alt="Passo 3: Transportar a vítima"
                  className="img-fluid rounded"
                  style={{ maxHeight: "250px", border: "3px solid #f39c12" }}
                />
              </div>
              <div className="col-md-6">
                <h4 style={{ color: "#f39c12", marginBottom: "1rem" }}>Passo 3 - Transporte</h4>
                <ul style={{ fontSize: "1.1rem", lineHeight: "1.7", color: "#e9ecef" }}>
                  <li className="mb-2">Utilize técnicas apropriadas para levantar a vítima, como o arrastamento ou a técnica de dois socorristas.</li>
                  <li className="mb-2">Mantenha a vítima estável durante o transporte, evitando movimentos excessivos.</li>
                  <li>Transporte a vítima até um local seguro ou aguarde a chegada de profissionais de socorro.</li>
                </ul>
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
              src="/assets/rva5.png"
              alt="Salto"
              className="img-fluid rounded"
              style={{ maxHeight: "350px", border: "3px solid #f39c12" }}
            />
          </div>
          <div className="col-md-6">
            <p style={{ fontSize: "1.1rem", lineHeight: "1.7", color: "#e9ecef" }}>
              A partir da posição de agachamento, <strong>impulsione o corpo para cima</strong> em um salto explosivo,
              estendendo completamente os joelhos e quadris.
            </p>
            <p style={{ fontSize: "1.1rem", lineHeight: "1.7", color: "#e9ecef" }}>
              Use os braços para auxiliar no impulso, movendo-os para frente e para cima.
            </p>
            <p style={{ fontSize: "1.1rem", lineHeight: "1.7", color: "#e9ecef" }}>
              Aterrisse suavemente e retorne à posição de agachamento para amortecer o impacto.
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
            <h1 className="m-0" style={{ fontSize: "1.8rem", fontWeight: "700" }}>SAV</h1>
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
            Retirada de vítima Consciente e inconsciente do auditório.
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

            <div className="text-center my-5 p-4 bg-white border border-2 border-warning rounded-3 shadow">
              <h3 className="mb-4 fw-bold text-danger">
                <i className="bi bi-exclamation-triangle-fill me-2"></i>
                Emergência Médica - 112
              </h3>
              <p>Clique no botão abaixo para mais detalhes do exercício</p>
              <p>👇</p>
              <div className="d-flex justify-content-center">
                <Inem />
              </div>
              <p className="mt-3 small text-muted">
                Exercício de chamada à emergência médica.
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
                Resumo do Exercício
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

      {/* Footer  */}
      <footer className="border-top py-4" style={{ backgroundColor: "#F9F9F9" }}>
        <div className="container text-center">
          <p style={{ fontSize: "0.9rem", color: "#757575" }}>
            © {new Date().getFullYear()} SAV. <br></br>Todos os direitos reservados.
          </p>
        </div>
      </footer>

      {/* Modal de Registro */}
      <Modal show={showModal} onHide={handleModalClose} centered>
        <Modal.Header closeButton className="border-0">
          <Modal.Title className="fw-bold text-dark">Registrar Exercício</Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-4">
          {!submitted ? (
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formNome">
                <Form.Label className="fw-semibold">Nome Completo</Form.Label>
                <Form.Control
                  type="text"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  placeholder="Digite seu nome completo"
                  required
                  className="p-2"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formCircuito">
                <Form.Label className="fw-semibold">Circuito</Form.Label>
                <Form.Control
                  type="text"
                  name="circuito"
                  value={formData.circuito}
                  onChange={handleChange}
                  placeholder="Digite o seu circuito"
                  required
                  className="p-2"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formConcluido">
                <Form.Check
                  type="checkbox"
                  name="concluido"
                  checked={formData.concluido}
                  onChange={handleChange}
                  label="Exercício concluído"
                  className="fw-semibold"
                />
              </Form.Group>
              <div className="text-center">
                <Button type="submit" className="btn btn-success fw-bold px-4 py-2">
                  Enviar
                </Button>
              </div>
            </Form>
          ) : (
            <div className="text-center">
              <h5 className="text-success fw-bold">Registro concluído com sucesso!</h5>
              <Button onClick={handleModalClose} className="btn btn-secondary mt-3 px-4">
                Fechar
              </Button>
            </div>
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
}
