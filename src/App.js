import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useCallback } from "react";
import { Container, TextField } from "@material-ui/core";
export default function App() {
    const onChangeFirst = useCallback((event) => {
        console.log(event);
    }, []);
    return (_jsxs(Container, Object.assign({ maxWidth: "sm" }, { children: [_jsx(TextField, { onChange: onChangeFirst }, void 0),
            _jsx("br", {}, void 0),
            _jsx(TextField, { onChange: (event) => {
                    console.log(event);
                } }, void 0)] }), void 0));
}
