const [packs, setPacks] = useState([])

const clasesPromise = new Promise((resolve, reject) => {
    const packsDeClases = [
        {
            'id': 1,
            'title': '2 veces por semana',
            'price': '$35.000',
            'descriprion': 'Para empezar a conocer la práctica',
            'pictureUrl': 'imagen1.jpg'
        },
        {
            'id': 2,
            'title': '3 veces por semana',
            'price': '$50.000',
            'descriprion': 'Ideal para profundizar en la disciplina',
            'pictureUrl': 'imagen2.jpg'
        },
        {
            'id': 3,
            'title': "Pase libre",
            'price': '$70.000',
            'descriprion': 'Vas a especializarte en tu estilo preferido',
            'pictureUrl': 'imagen3.jpg'
        },
        {
            'id': 4,
            'title': 'Clase de prueba',
            'price': 'Gratis',
            'descriprion': 'Consgrarás parte de tu vida a la práctica diaria',
            'pictureUrl': 'imagen4.jpg'
        }
    ];

    setTimeout(() => {
        resolve(packsDeClases)
    }, 2000);
});

export default item