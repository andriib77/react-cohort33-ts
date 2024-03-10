import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import {
  ClientsWrapper,
  ClientsPageTitle,
  ButtonControl,
  ClientsPageParagraph,
} from "../styles";
import Button from "components/Button/Button";
function Facebook() {
  const navigate = useNavigate();
  const goToPage = () => {
    navigate("/clients");
  };
  useEffect(() => {
    return () => console.log("Component Users unmounted");
  }, []);
  return (
    <ClientsWrapper>
      <ClientsPageTitle>Facebook</ClientsPageTitle>
      <ClientsPageParagraph>
        Facebook («Фе́йсбу́к», [ˈfeɪsˌbʊk]) — крупнейшая социальная сеть в мире,
        которой владеет компания Meta Platforms (до 28 октября 2021 года —
        Facebook Inc.). Была основана 4 февраля 2004 года Марком Цукербергом и
        его соседями по комнате во время обучения в Гарвардском университете —
        Эдуардо Саверином, Дастином Московицем и Крисом Хьюзом.
      </ClientsPageParagraph>
      <ClientsPageParagraph>
        Первоначально веб-сайт был назван Thefacebook и был доступен только для
        студентов Гарвардского университета, затем регистрацию открыли для
        других университетов Бостона, а затем — и для студентов любых учебных
        учреждений США, имеющих электронный адрес в домене .edu. Начиная с
        сентября 2006 года сайт доступен для всех пользователей Интернета в
        возрасте от 13 лет, имеющих адрес электронной почты.
      </ClientsPageParagraph>
      <ClientsPageParagraph>
        На декабрь 2022 года аудитория Facebook составила 2,96 миллиарда
        пользователей — это те, кто заходил на сайт хотя бы раз в месяц или за
        указанный промежуток времени был зафиксирован с помощью кнопки Нравится
        и следящих cookie. Суточная активная аудитория составила 2 млрд человек
        — столько фиксируется следящей сетью Facebook ежедневно. 24 августа 2015
        года число посетителей социальной сети Facebook впервые составило один
        миллиард человек. 1,03 млрд человек в месяц используют мобильное
        приложение Facebook. Каждый день в социальной сети пользователи
        оставляют 6 млрд «лайков» и комментариев и публикуют 300 миллионов
        фотографий. На сайте зафиксировано 200 миллиардов «дружеских связей».
        Количество просмотров страниц сайта в октябре 2011 года составило 1
        триллион, количество просмотров видео на сайте достигло в 2015 году
        отметки в 8 миллиардов в день.
      </ClientsPageParagraph>
      <ClientsPageParagraph>
        Компания Meta является владельцем других популярных сервисов, таких как
        Instagram, WhatsApp, workplace[en] (корпоративный мессенджер) и компании
        Oculus.
      </ClientsPageParagraph>
      <ClientsPageParagraph>
        Facebook написан на C++ и PHP (HHVM).
      </ClientsPageParagraph>
      <ClientsPageParagraph>
        Благодаря этому сайту Марк Цукерберг в 23 года стал самым молодым
        миллиардером планеты.
      </ClientsPageParagraph>
      <ButtonControl>
        <Button name="Go to page" onClick={goToPage} />
      </ButtonControl>
    </ClientsWrapper>
  );
}
export default Facebook;
