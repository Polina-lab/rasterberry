import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useScrollToHash = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Ждем завершения загрузки страницы
    if (pathname === "/") {
      setTimeout(() => {
        if (hash) {
          const element = document.querySelector(hash);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }
      }, 100); // Небольшая задержка для гарантии отрисовки элементов
    }
  }, [pathname, hash]);
};

export default useScrollToHash;
