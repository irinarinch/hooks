import useJsonFetch from "../../hooks/useJsonFetch";
import style from "./hook.module.css";

interface IProps {
  url: string;
}

const FetchResult = ({ url }: IProps) => {
  const [data, loading, error] = useJsonFetch(url, {});

  return (
    <div className={style.container}>
      {loading && <h5 className={style.loading}>Идет загрузка...</h5>}
      {data && <h5 className={style.data}>Данные загружены</h5>}
      {error && <h5 className={style.error}>Произошла ошибка: {error}</h5>}
    </div>
  );
};

export default FetchResult;
