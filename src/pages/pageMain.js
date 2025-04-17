import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
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
          <h1 className="fw-bold">S.A.V.</h1>
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
        </section>

        <section className="bg-light py-5">
          <div className="container text-center">
            <img
              src={imageUrl}
              alt="Imagem do local"
              className="img-fluid w-75 mx-auto d-block"
            />
            <p className="fs-5 mt-4">
    <span className="d-block mb-2 fw-bold">Localização dos exercícios</span>
    <span className="d-block mb-3">
        <span className="badge bg-primary rounded-circle me-2"></span>
        <strong>Círculo Azul:</strong> Exercício 1, perto das casas de banho principais
    </span>
    <span className="d-block mb-3">
        <span className="badge bg-success rounded-circle me-2"></span>
        <strong>Círculo Verde:</strong> Exercício 2, dentro do auditório
    </span>
    <span className="d-block mb-3">
        <span className="badge bg-warning rounded-circle me-2"></span>
        <strong>Círculo Amarelo:</strong> Exercício 3, junto aos Primeiros Socorros
    </span>
    <span className="d-block">
        <span className="badge bg-danger rounded-circle me-2"></span>
        <strong>Círculo Vermelho:</strong> Exercício 4, auditório 2
    </span>
</p>
          </div>
        </section>

      </main>

      <footer className="bg-dark text-white text-center py-3">
        <p>
          © S.A.V. <br />
          Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
}
