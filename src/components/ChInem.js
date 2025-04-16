import { useState } from "react";
import { Modal, Button } from "react-bootstrap";

function Inem() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="dark" onClick={handleShow} className="rounded-pill px-4 py-2 shadow-sm fw-medium">
        Chamada à Emergência Médica
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        scrollable
        backdrop="static"
        keyboard={false}
        className="font-sans-serif"
      >
        <Modal.Header className="bg-dark text-white border-0">
          <Modal.Title className="fw-bold fs-5">
            Chamada à Emergência Médica
          </Modal.Title>
        </Modal.Header>

        <Modal.Body className="px-4 px-md-5 py-4">
          <section className="mb-4 pb-2">
            <h5 className="text-secondary fw-semibold border-bottom pb-2 mb-3 fs-5">
              Guia para o Utilizador — Como Ligar para o <strong>112</strong> em Caso de Emergência Médica
            </h5>

            <div className="alert alert-warning border-start border-warning border-4 mb-4">
              <h6 className="alert-heading d-flex align-items-center fw-semibold mb-2">
                <i className="bi bi-exclamation-triangle-fill me-2"></i>
                Antes de Ligar
              </h6>
              <ul className="mb-0 ps-3">
                <li className="mb-1">Mantenha a calma.</li>
                <li className="mb-1">Fale de forma clara e pausada.</li>
                <li>Recolha a morada exata e o estado da vítima, se possível.</li>
              </ul>
            </div>

            <div className="mb-3 p-3 bg-light rounded">
              <p className="mb-2">
                <strong className="d-block mb-1">1. Diga logo no início que é uma emergência médica:</strong>
                "É uma emergência médica, por favor encaminhe para a emergência médica."<br />
                <small className="text-muted">(Isto evita atrasos, pois o 112 pode encaminhar para vários serviços.)</small>
              </p>
            </div>

            <div className="mb-3 p-3 bg-light rounded">
              <p className="mb-2">
                <strong className="d-block mb-1">2. Descreva o que está a acontecer:</strong>
                "A pessoa está inconsciente."<br />
                "Está com dores no peito."<br />
                "Não está a respirar."
              </p>
            </div>

            <div className="mb-3 p-3 bg-light rounded">
              <p className="mb-2">
                <strong className="d-block mb-1">3. Indique a localização exata:</strong>
                "Estamos no Porto, em Valongo, no <strong>Salão de Assembleias das Testemunhas de Jeová na Rua Dom Pedro IV</strong>."
              </p>
            </div>

            <div className="mb-3 p-3 bg-light rounded">
              <p className="mb-2">
                <strong className="d-block mb-1">4. Responda com calma às perguntas do operador:</strong>
                "Está consciente?"<br />
                "Está a respirar?"<br />
                "Idade e sexo?"<br />
                "Doenças ou medicação conhecidas?"
              </p>
            </div>

            <div className="mb-3 p-3 bg-light rounded">
              <p className="mb-2">
                <strong className="d-block mb-1">5. Siga as instruções dadas.</strong>
                O operador pode guiá-lo para fazer compressões, colocar a vítima de lado, controlar hemorragias, etc.
              </p>
            </div>

            <div className="mb-3 p-3 bg-light rounded">
              <p className="mb-2">
                <strong className="d-block mb-1">6. Não desligue até que lhe seja indicado.</strong>
                A sua ajuda pode ser vital até à chegada da ambulância.
              </p>
            </div>
          </section>

          <section className="pt-2">
            <h5 className="text-secondary fw-semibold border-bottom pb-2 mb-3 fs-5">
              Exemplo de Guião de Chamada de Emergência
            </h5>

            <div className="mb-4 p-3 bg-light rounded">
              <p className="mb-1"><strong className="text-dark">Operador:</strong> 112, qual é a sua emergência?</p>
              <p className="mb-1"><strong className="text-dark">Utilizador:</strong> É uma emergência médica. Por favor, encaminhe para a emergência médica.</p>
            </div>

            <div className="mb-4 p-3 bg-light rounded">
              <p className="mb-1"><strong className="text-dark">Operador:</strong> Emergência médica, bom dia. Está a falar com [nome]. Qual é a sua emergência?</p>
              <p className="mb-1"><strong className="text-dark">Utilizador:</strong> Chamo-me [seu nome]. A minha mãe desmaiou e não responde. Está inconsciente.</p>
            </div>

            <div className="mb-4 p-3 bg-light rounded">
              <p className="mb-1"><strong className="text-dark">Operador:</strong> Qual é a localização exata onde se encontra?</p>
              <p className="mb-1"><strong className="text-dark">Utilizador:</strong> Estamos no Porto, em Valongo, no <strong>Salão de Assembleias das Testemunhas de Jeová na Rua Dom Pedro IV</strong>.</p>
            </div>

            <div className="mb-4 p-3 bg-light rounded">
              <p className="mb-1"><strong className="text-dark">Operador:</strong> Ela está a respirar neste momento?</p>
              <p className="mb-1"><strong className="text-dark">Utilizador:</strong> Sim, mas com dificuldade.</p>
            </div>

            <div className="mb-4 p-3 bg-light rounded">
              <p className="mb-1"><strong className="text-dark">Operador:</strong> Tem pulso? Sente o coração a bater?</p>
              <p className="mb-1"><strong className="text-dark">Utilizador:</strong> Sim, mas muito fraco.</p>
            </div>

            <div className="mb-4 p-3 bg-light rounded">
              <p className="mb-1"><strong className="text-dark">Operador:</strong> Qual é a idade da sua mãe?</p>
              <p className="mb-1"><strong className="text-dark">Utilizador:</strong> 72 anos.</p>
            </div>

            <div className="mb-4 p-3 bg-light rounded">
              <p className="mb-1"><strong className="text-dark">Operador:</strong> Ela tem doenças conhecidas ou está a tomar alguma medicação?</p>
              <p className="mb-1"><strong className="text-dark">Utilizador:</strong> Sim, é diabética e tem problemas cardíacos.</p>
            </div>

            <div className="mb-4 p-3 bg-light rounded">
              <p className="mb-1"><strong className="text-dark">Operador:</strong> O acesso ao edifício está desbloqueado? Há algum código ou portão?</p>
              <p className="mb-1"><strong className="text-dark">Utilizador:</strong> Sim, a porta principal está aberta.</p>
            </div>

            <div className="mb-4 p-3 bg-light rounded">
              <p className="mb-1"><strong className="text-dark">Operador:</strong> A ambulância já está a caminho. Preciso que fique com ela até chegarem.</p>
              <p className="mb-1"><strong className="text-dark">Utilizador:</strong> Claro.</p>
            </div>

            <div className="mb-4 p-3 bg-light rounded">
              <p className="mb-1"><strong className="text-dark">Operador:</strong> Coloque-a de lado, em posição lateral de segurança, se não houver suspeita de lesão.</p>
              <p className="mb-1"><strong className="text-dark">Utilizador:</strong> Está bem, já está de lado.</p>
            </div>

            <div className="mb-4 p-3 bg-light rounded">
              <p className="mb-1"><strong className="text-dark">Operador:</strong> Continue a observar a respiração e mantenha-se calmo.</p>
              <p className="mb-1"><strong className="text-dark">Utilizador:</strong> Está consciente agora, mas fraca.</p>
            </div>

            <div className="mb-4 p-3 bg-light rounded">
              <p className="mb-1"><strong className="text-dark">Operador:</strong> Se notar alguma alteração, diga-me de imediato.</p>
              <p className="mb-1"><strong className="text-dark">Utilizador:</strong> Sim, vou ficar atento.</p>
            </div>

            <div className="mb-4 p-3 bg-light rounded">
              <p className="mb-1"><strong className="text-dark">Operador:</strong> Não desligue a chamada até eu indicar ou até os socorristas chegarem.</p>
              <p className="mb-1"><strong className="text-dark">Utilizador:</strong> Entendido.</p>
            </div>

            <div className="mb-4 p-3 bg-light rounded">
              <p className="mb-1"><strong className="text-dark">Operador:</strong> Está a fazer um excelente trabalho. Mantenha-se ao lado dela.</p>
            </div>
          </section>
        </Modal.Body>

        <Modal.Footer className="border-0">
          <Button variant="secondary" onClick={handleClose} className="px-4 py-2 rounded-pill fw-medium">
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Inem;