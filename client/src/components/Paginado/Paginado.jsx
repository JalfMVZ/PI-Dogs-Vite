import style from "./Paginated.module.css";

export default function Paginado({ thisPage, totalPages, pageChange }) {
  const handlerPrePages = () => {
    if (thisPage > 1) {
      pageChange(thisPage - 1);
    }
  };
  const handlerNextPages = () => {
    if (thisPage < totalPages) {
      pageChange(thisPage + 1);
    }
  };
  const handlerPagesOnClick = (page) => {
    pageChange(page);
  };
  const visiblePageCount = 9;
  const startPage = Math.max(1, thisPage - Math.floor(visiblePageCount / 2));
  const endPage = Math.min(startPage + visiblePageCount - 1, totalPages);

  const showPrevButton = thisPage > 1;
  const showNextButton = thisPage < totalPages;

  return (
    <div className={style.pagDiv}>
      {showPrevButton && <button onClick={handlerPrePages }>Previous</button>}
      {Array.from(
        { length: endPage - startPage + 1 },
        (_, index) => startPage + index
      ).map((page) => (
        <button
          key={page}
          onClick={() => handlerPagesOnClick(page)}
          disabled={thisPage === page}
        >
          {page}
        </button>
      ))}
      {showNextButton && (
        <button onClick={handlerNextPages} className={style.pag}>
          Next
        </button>
      )}
    </div>
  );
}
