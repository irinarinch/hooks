import Card from "react-bootstrap/Card";

import useAuthorizationData from "../../hooks/useAuthorizationData";
import "bootstrap/dist/css/bootstrap.min.css";
import style from "./authentication.module.css";

interface INewsProps {
  token: string;
}

const News = ({ token }: INewsProps) => {
  const { data, error } = useAuthorizationData(
    import.meta.env.VITE_NEWS_URL,
    token
  );

  if (error === 401) {
    localStorage.clear();
  }

  return (
    <div className={style.news_container}>
      {Array.isArray(data) &&
        data.map((item) => (
          <Card key={item.id} className={style.news}>
            <Card.Img variant="top" src={"https://i.pravatar.cc/300"}/>
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>{item.content}</Card.Text>
            </Card.Body>
          </Card>
        ))}
    </div>
  );
};

export default News;
