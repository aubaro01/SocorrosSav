import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Inem from "../components/ChInem";

export default function PageEx2() {
  

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
            Assista ao vídeo.
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
            <h4 className="text-warning mb-3"> Vítima Consciente</h4>
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
  ];

  return (
    <div className="exercise-page">
      <header className="py-4" style={{ backgroundColor: "#2c3e50", color: "#fff" }}>
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <h1 className="m-0" style={{ fontSize: "1.8rem", fontWeight: "700" }}>S.A.V.</h1>
            <p className="mt-2 mb-0" style={{ fontSize: "1.1rem", color: "#ecf0f1" }}>
            Remoção de Vítima no Auditório<br></br>
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
    </div>
  );
}
