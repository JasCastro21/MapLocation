import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
    const { pathname } = useLocation();

    // Utiliza o hook useEffect para executar uma ação toda vez que o pathname da URL muda
    useEffect(() => {
        // Faz o scroll para o topo da página
        window.scrollTo(0, 0);
    }, [pathname]);

    // Retorna null para não renderizar nada, pois este componente é apenas para o scroll
    return null;
}
