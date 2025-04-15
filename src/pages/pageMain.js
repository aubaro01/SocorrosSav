import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button } from 'react-bootstrap';
import axios from "axios";


axios.defaults.baseURL = process.env.USER_CREATE;

const imageUrl = "/assets/mapa.jpg";
const FinalP = "/assets/form.png";
const modal = "/assets/modalF.png";

export default function LandingPage() {
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      nome: event.target.nome.value,
      circuito: event.target.circuito.value
    };

    setLoading(true);
    setErrorMessage("");
    setSuccessMessage("");

    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/users`, formData, {
        headers: { "Content-Type": "application/json" },
      });

      if (response.status === 200 || response.status === 201) {

        event.target.reset();
        setSuccessMessage("Inscrição enviada com sucesso! Agora, está pronto para começar os exercícios!");
      } else {
        setErrorMessage(`Erro: ${response.data.message || 'Erro desconhecido'}`);
      }
    } catch (error) {
      console.error("Erro ao enviar inscrição:", error);
      setErrorMessage(error.response?.data?.message || "Erro ao enviar inscrição.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <header className="bg-dark text-white py-4 text-center">
        <div className="container">
          <h1 className="fw-bold">SAV</h1>
          <p className="fs-1">Formação para os primeiros socorros</p>
        </div>
      </header>

      <main className="flex-grow-1">
        <section className="container text-center py-5">
          <h2 className="fw-bold">
            Bem-vindo(a) à <strong>Formação para Primeiros Socorros</strong>
          </h2>
          <br />
          <p className="text-muted">
            "Procurando não apenas os vossos próprios interesses, mas também os interesses dos outros."
          </p>
          <figcaption className="blockquote-footer">
            <cite title="Source Title"> Filipenses 2:4</cite>
          </figcaption>
          <h3 className="fw-bold alert alert-secondary">
            <strong>Instruções!</strong>
          </h3>
          <Button variant="btn btn-dark" onClick={() => setShowModal(true)}>
            Instruções para responsáveis do circuitos
          </Button>
        </section>

        <section className="bg-light py-5">
          <div className="container text-center">
            <img
              src={imageUrl}
              alt="Imagem do local"
              className="img-fluid w-75 mx-auto d-block"
            />
            <p className="text-muted mt-3">
              Mapa dos pontos dos exercícios<br />
              Circulo à Azul: <strong>Exercício 1 & 2,</strong> perto das casas de banho  <br />
              Circulo à Verde: <strong>Exercício 3,</strong> dentro do auditório<br />
              Circulo à Amarelo: <strong>Exercício 4,</strong> entrada do auditório<br />
              Circulo à Vermelho: <strong>Exercício 5,</strong> perto dos perdidos e achados<br />
            </p>
          </div>
        </section>


        <section className="container py-5">
  <div className="text-center mb-4">
    <h2 className="fw-bold">Inscrever o meu Circuito</h2>
    <p className="text-muted text-break">
      Este formulário destina-se à inscrição dos circuitos e deve ser preenchido pelo responsável pelos <strong>Primeiros Socorros de cada circuito</strong>.
    </p>
  </div>

          {successMessage && (
            <div className="alert alert-success text-center mb-4">
              <strong>{successMessage}</strong>
            </div>
          )}


          {errorMessage && (
            <div className="alert alert-danger text-center mb-4">
              <strong>{errorMessage}</strong>
            </div>
          )}

          <form className="mx-auto" style={{ maxWidth: "400px" }} onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="nome" className="form-label">Nome</label>
              <input
                type="text"
                id="nome"
                className="form-control"
                placeholder="Digite o seu primeiro e último nome"
                minLength="5"
                maxLength="30"
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="circuito" className="form-label">Circuito</label>
              <input
                type="text"
                id="circuito"
                className="form-control"
                placeholder="Digite o seu circuito"
                minLength="1"
                maxLength="3"
                required
              />
            </div>

            <button type="submit" className="btn btn-dark w-100" disabled={loading}>
              {loading ? "A Submeter..." : "Submeter Dados"}
            </button>
          </form>
        </section>
      </main>

      <footer className="bg-dark text-white text-center py-3">
        <p>
          © SAV. <br />
          Todos os direitos reservados.
        </p>
      </footer>

      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        size="lg"
        centered
        scrollable
        className="instruction-modal"
      >
        <Modal.Header className="border-black border-bottom-2">
          <Modal.Title className="fw-bold">
            <i className="bi bi-info-circle me-2"></i>
            Instruções para os Exercícios
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div className="alert alert-warning mb-4">
            <i className="bi bi-lightbulb me-2"></i>
            Siga estes passos cuidadosamente para garantir que seu exercício seja registrado corretamente.
          </div>

          <div className="instruction-step mb-4 p-3 border border-1 rounded-0">
            <div className="step-header d-flex align-items-center mb-2">
              <span className="step-badge bg-dark text-white rounded-0 me-3" style={{ width: '28px', height: '28px', lineHeight: '28px', textAlign: 'center' }}>1</span>
              <h5 className="mb-0 fw-bold">Concluir o Exercício</h5>
            </div>
            <div className="ps-5">
              <p>
                Ao finalizar cada exercício, aparecerá um resumo com as informações principais
                e um botão para acessar um formulário de envio.
              </p>
              <div className="mt-3">
                <img
                  src={FinalP}
                  alt="Tela de conclusão do exercício"
                  className="img-fluid border border-1 border-dark"
                  style={{ maxHeight: '200px' }}
                />
                <p className="text-center small mt-1 mb-0">Exemplo da tela de conclusão</p>
              </div>
            </div>
          </div>

          <div className="instruction-step mb-4 p-3 border border-1 rounded-0">
            <div className="step-header d-flex align-items-center mb-2">
              <span className="step-badge bg-dark text-white rounded-0 me-3" style={{ width: '28px', height: '28px', lineHeight: '28px', textAlign: 'center' }}>2</span>
              <h5 className="mb-0 fw-bold">Preencher o Formulário</h5>
            </div>
            <div className="ps-5">
              <p>No formulário que será aberto, insira:</p>
              <ul className="mb-3">
                <li>O nome que colocou no formulário da inscrição</li>
                <li>O seu circuito</li>
                <li>E marque o exercício como concluido.</li>
              </ul>
              <div className="mt-3">
                <img
                  src={modal}
                  alt="Formulário de envio"
                  className="img-fluid border border-1 border-dark"
                  style={{ maxHeight: '250px' }}
                />
                <p className="text-center small mt-1 mb-0">Modelo do formulário</p>
              </div>
            </div>
          </div>

          <div className="instruction-step mb-4 p-3 border border-1 rounded-0">
            <div className="step-header d-flex align-items-center mb-2">
              <span className="step-badge bg-dark text-white rounded-0 me-3" style={{ width: '28px', height: '28px', lineHeight: '28px', textAlign: 'center' }}>3</span>
              <h5 className="mb-0 fw-bold">Finalizar Envio</h5>
            </div>
            <div className="ps-5">
              <p>
                Clique no botão <strong>"Enviar"</strong> para confirmar a participação do seu circuito
                e registrar a conclusão do exercício.
              </p>
              <div className="alert alert-warning mt-3 rounded-0">
                <i className="bi bi-exclamation-triangle me-2"></i>
                Certifique-se de que todos os dados estão corretos antes de enviar.
              </div>
            </div>
          </div>

          <div className="support-note mt-4 p-3 border border-1">
            <h6 className="d-flex align-items-center fw-bold">
              <i className="bi bi-question-circle me-2"></i>
              Precisa de ajuda?
            </h6>
            <p className="mb-0">
              Fale com qualquer formador.
            </p>
          </div>
        </Modal.Body>

        <Modal.Footer className="border-black border-top-2">
          <Button
            variant="outline-dark"
            onClick={() => setShowModal(false)}
            className="rounded-0 border-2 fw-bold d-flex align-items-center"
          >
            <i className="bi bi-check2 me-2"></i>
            Entendi as instruções
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
