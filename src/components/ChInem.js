import { useState } from "react";
import { Modal, Button } from "react-bootstrap";

function Inem() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="dark" onClick={handleShow} className="rounded-pill px-4 py-2 shadow-sm">
        Chamada à Emergência Médica
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        scrollable
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header className="bg-dark text-white">
          <Modal.Title className="fw-bold">
            Chamada à Emergência Médica
          </Modal.Title>
        </Modal.Header>

        <Modal.Body className="px-5 py-4" style={{ lineHeight: 1.8 }}>
          <section className="mb-5">
            <h5 className="text-secundary fw-semibold border-bottom pb-2 mb-3">
              Guia para o Utilizador — Como Ligar para o <strong>112</strong> em Caso de Emergência Médica
            </h5>

            <div className="alert alert-warning border-warning mb-4">
              <h6 className="alert-heading">
                <i className="bi bi-exclamation-triangle-fill me-2"></i>
                Antes de Ligar
              </h6>
              <ul className="mb-0 ps-3">
                <li>Mantenha a calma.</li>
                <li>Fale de forma clara e pausada.</li>
                <li>Recolha a morada exata e o estado da vítima, se possível.</li>
              </ul>
            </div>

            <p className="text-muted mb-3">
              <strong>1. Diga logo no início que é uma emergência médica:</strong><br />
              "É uma emergência médica, por favor encaminhe para a emergência médica."<br />
              <em>(Isto evita atrasos, pois o 112 pode encaminhar para vários serviços.)</em>
            </p>

            <p className="text-muted mb-3">
              <strong>2. Descreva o que está a acontecer:</strong><br />
              "A pessoa está inconsciente."<br />
              "Está com dores no peito."<br />
              "Não está a respirar."
            </p>

            <p className="text-muted mb-3">
              <strong>3. Indique a localização exata:</strong><br />
              "Estamos no Porto, em Valongo, no <strong>Salão de Assembleias das Testemunhas de Jeová na Rua Dom Pedro IV</strong>."
            </p>

            <p className="text-muted mb-3">
              <strong>4. Responda com calma às perguntas do operador:</strong><br />
              "Está consciente?"<br />
              "Está a respirar?"<br />
              "Idade e sexo?"<br />
              "Doenças ou medicação conhecidas?"
            </p>

            <p className="text-muted mb-3">
              <strong>5. Siga as instruções dadas.</strong><br />
              O operador pode guiá-lo para fazer compressões, colocar a vítima de lado, controlar hemorragias, etc.
            </p>

            <p className="text-muted mb-3">
              <strong>6. Não desligue até que lhe seja indicado.</strong><br />
              A sua ajuda pode ser vital até à chegada da ambulância.
            </p>
          </section>

          <section>
            <h5 className="text-secundary fw-semibold border-bottom pb-2 mb-3">
             Exemplo de Guião de Chamada de Emergência
            </h5>

            <div className="text-muted">
              <div className="mb-4">
                <p className="mb-1"><strong>Operador:</strong> 112, qual é a sua emergência?</p>
                <p className="mb-1"><strong>Utilizador:</strong> É uma emergência médica. Por favor, encaminhe para a emergência médica.</p>
              </div>

              <div className="mb-4">
                <p className="mb-1"><strong>Operador:</strong> Emergência médica, bom dia. Está a falar com [nome]. Qual é a sua emergência?</p>
                <p className="mb-1"><strong>Utilizador:</strong> Chamo-me [seu nome]. A minha mãe desmaiou e não responde. Está inconsciente.</p>
              </div>

              <div className="mb-4">
                <p className="mb-1"><strong>Operador:</strong> Ela está a respirar neste momento?</p>
                <p className="mb-1"><strong>Utilizador:</strong> Sim, mas com dificuldade.</p>
              </div>

              <div className="mb-4">
                <p className="mb-1"><strong>Operador:</strong> Tem pulso? Sente o coração a bater?</p>
                <p className="mb-1"><strong>Utilizador:</strong> Sim, mas muito fraco.</p>
              </div>

              <div className="mb-4">
                <p className="mb-1"><strong>Operador:</strong> Qual é a idade da sua mãe?</p>
                <p className="mb-1"><strong>Utilizador:</strong> 72 anos.</p>
              </div>

              <div className="mb-4">
                <p className="mb-1"><strong>Operador:</strong> Ela tem doenças conhecidas ou está a tomar alguma medicação?</p>
                <p className="mb-1"><strong>Utilizador:</strong> Sim, é diabética e tem problemas cardíacos.</p>
              </div>

              <div className="mb-4">
                <p className="mb-1"><strong>Operador:</strong> Qual é a localização exata onde se encontra?</p>
                <p className="mb-1"><strong>Utilizador:</strong> Estamos no Porto, em Valongo, no <strong>Salão de Assembleias das Testemunhas de Jeová na Rua Dom Pedro IV</strong>.</p>
              </div>

              <div className="mb-4">
                <p className="mb-1"><strong>Operador:</strong> O acesso ao edifício está desbloqueado? Há algum código ou portão?</p>
                <p className="mb-1"><strong>Utilizador:</strong> Sim, a porta principal está aberta.</p>
              </div>

              <div className="mb-4">
                <p className="mb-1"><strong>Operador:</strong> A ambulância já está a caminho. Preciso que fique com ela até chegarem.</p>
                <p className="mb-1"><strong>Utilizador:</strong> Claro.</p>
              </div>

              <div className="mb-4">
                <p className="mb-1"><strong>Operador:</strong> Coloque-a de lado, em posição lateral de segurança, se não houver suspeita de lesão.</p>
                <p className="mb-1"><strong>Utilizador:</strong> Está bem, já está de lado.</p>
              </div>

              <div className="mb-4">
                <p className="mb-1"><strong>Operador:</strong> Continue a observar a respiração e mantenha-se calmo.</p>
                <p className="mb-1"><strong>Utilizador:</strong> Está consciente agora, mas fraca.</p>
              </div>

              <div className="mb-4">
                <p className="mb-1"><strong>Operador:</strong> Se notar alguma alteração, diga-me de imediato.</p>
                <p className="mb-1"><strong>Utilizador:</strong> Sim, vou ficar atento.</p>
              </div>

              <div className="mb-4">
                <p className="mb-1"><strong>Operador:</strong> Não desligue a chamada até eu indicar ou até os socorristas chegarem.</p>
                <p className="mb-1"><strong>Utilizador:</strong> Entendido.</p>
              </div>

              <div className="mb-4">
                <p className="mb-1"><strong>Operador:</strong> Está a fazer um excelente trabalho. Mantenha-se ao lado dela.</p>
              </div>
            </div>
          </section>
        </Modal.Body>

        <Modal.Footer className="text-center">
          <Button variant="secondary" onClick={handleClose} className="px-4 py-2 rounded-pill">
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Inem;
