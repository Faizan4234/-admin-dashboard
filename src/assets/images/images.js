const importAll = (r) => r.keys().map(r);

const Images = importAll(require.context('./', false, /\.(jpg|jpeg|png)$/));

export default Images;