import style from "./Paginated.module.css";

const Paginado = ({
  dogsPerPage,
  allDogs,
  paginado,
  currentPage,
  setCurrentPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(allDogs / dogsPerPage); i++) {
    pageNumbers.push(i);
  } 

  function handlePrev() {
    setCurrentPage((currentPage) =>
      currentPage > 1 ? currentPage - 1 : currentPage
    );
  }

  function handleNext() {
    setCurrentPage((currentPage) =>
      currentPage < pageNumbers.length ? currentPage + 1 : currentPage
    );
  }

  return (
    <nav className={style.containerPaginado}>
      <div></div>
      <ul className={style.containerLi}>
        {pageNumbers &&
          pageNumbers.map((number) => {
            return (
              <li className={style.boxLi} key={number}>
                <button
                  onClick={() => paginado(number)}
                  className={style.button}
                >
                  {number}
                </button>
              </li>
            );
          })}
      </ul>
      <div className={style.containerButtons}>
        <a onClick={handlePrev} className={style.imgButton}></a>
        <a onClick={handleNext} className={style.imgButton}></a>
      </div>
    </nav>
  );
};

export default Paginado;
