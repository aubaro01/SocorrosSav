import React from 'react';

const Accordion = ({ data }) => {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-12 col-md-8 col-lg-6 mx-auto">
          <div className="accordion" id="accordionExample">
            {data.map((item, index) => {
              const headingId = `heading${index}`;
              const collapseId = `collapse${index}`;
              const isFirst = index === 0;

              return (
                <div className="accordion-item" key={index}>
                  <h2 className="accordion-header" id={headingId}>
                    <button
                      className={`accordion-button ${!isFirst ? 'collapsed' : ''}`}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#${collapseId}`}
                      aria-expanded={isFirst ? 'true' : 'false'}
                      aria-controls={collapseId}
                    >
                      {item.title}
                    </button>
                  </h2>
                  <div
                    id={collapseId}
                    className={`accordion-collapse collapse ${isFirst ? 'show' : ''}`}
                    aria-labelledby={headingId}
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <strong>{item.content}</strong>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
