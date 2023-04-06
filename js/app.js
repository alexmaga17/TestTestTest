import registerView from "./views/registerView.js";
import loginView from "./views/loginView.js";
import navView from "./views/navView.js";
import testCentersView from "./views/testCentersView.js";
import newAppointmentView from "./views/newAppointmentView.js";
import faqView from "./views/faqView.js";
import indexView from "./views/indexView.js";
import adminView from "./views/adminView.js";

class App {
	constructor() {
		// Mapeamento entre os ficheiros HTML e as views que estes vão carregar
		this.routes = {
			"": [navView],
			index: [navView, indexView],
			login: [loginView, navView],
			signup: [registerView, navView],
			postos: [testCentersView, navView],
			faq: [navView, faqView],
			info: [navView],
			marcacao: [navView, newAppointmentView],
			validacao: [navView],
			admin: [adminView],
			recover: [navView],
		};

		// importa dados dummy para testes
		this.#importDataFixtures();

		// instancia as views mapeadas no objeto routes
		this.#instantiateViews();
	}

	#instantiateViews() {
		const path = window.location.pathname;
		const file = path.substr(path.lastIndexOf("/") + 1);
		const route = file.split(".")[0];

		const views = this.#getViews(route);

		for (const view of views) {
			new view();
		}
	}

	#getViews(route) {
		return typeof this.routes[route] === "undefined"
			? []
			: this.routes[route];
	}

	#importDataFixtures() {
		const users = [
			{
				id: 0,
				usersName: "usersName1",
				dob: "2000-09-20",
				nif: "111111",
				city: "city1",
				gender: "gender1",
				email: "email1",
				phone: "99999999",
				password: "password1",
				likes: [],
			},
			{
				id: 1,
				usersName: "usersName2",
				dob: "2003-02-02",
				nif: "222222",
				city: "city2",
				gender: "gender2",
				email: "email2",
				phone: "88888888",
				password: "password2",
				likes: [],
			},
			{
				id: 2,
				usersName: "utilizadorEsmad",
				dob: "2003-02-02",
				nif: "222222",
				city: "city2",
				gender: "gender2",
				email: "utilizador@esmad.ipp.pt",
				phone: "88888888",
				password: "utilizadorEsmad",
				likes: [],
			},
		];

		const testCenters = [
			{
				id: 0,
				testCenterName: "Unilabs Praça da Batalha",
				address: "Rua Agusto Rosa 120, 4000-098 Porto",
				contact: {
					email: "info@unilabs.com",
					phone: "222401401",
				},
				website: "unilabs.pt",
				availableTests: {
					rapido: true,
					pcr: false,
					serologico: true,
					anticorpos: false,
				},
				openHours: "24h",
				likes: 9,
				rating: 4,
				comments: [
					{
						userComment: "Fernando Lemos",
						comment: "Agenda muito clara e de fácil marcação",
						userRating: 4,
					},
					{
						userComment: "João Silva",
						comment: "Resultado rápido!",
						userRating: 4,
					},
				],
				Latlng: "41.144563549333206, -8.607280702172778",
				testsDone: 18,
			},

			{
				id: 1,
				testCenterName: "Hospital CUF Porto",
				address: "Estr. da Circunvalação 14341, 4100-180 Porto",
				contact: {
					email: "info@cuf.com",
					phone: "220039000",
				},
				website: "cuf.pt",
				availableTests: {
					rapido: true,
					pcr: true,
					serologico: true,
					anticorpos: false,
				},
				openHours: "24h",
				likes: 53,
				rating: 5,
				comments: [
					{
						userComment: "Andreia Soares",
						comment: "Teste feito com a maior segurança e com resultados breves! Ótimo serviço e atendimento.",
						userRating: 4,
					},
				],
				Latlng: "41.17586111735044,-8.669205650213955",
				testsDone: 10,
			},
			{
				id: 2,
				testCenterName: "Hospital da Luz Arrábida",
				address: "PCT de Henrique Moreira 150, 4400-346 Vila Nova de Gaia",
				contact: {
					email: "indo@hspluz.com",
					phone: "223776800",
				},
				website: "hospitaldaluz.pt",
				availableTests: {
					rapido: true,
					pcr: true,
					serologico: true,
					anticorpos: false,
				},
				openHours: "24h",
				likes: 23,
				rating: 5,
				comments: [
					{
						userComment: "Miguel Pereira",
						comment: "Comodidade na realização do teste!",
						userRating: 5,
					},
					{
						userComment: "José Manuel",
						comment: "Marcação rápida e fácil",
						userRating: 4,
					},
				],
				Latlng: "41.15739845744462, -8.625954731008417",
				testsDone: 5,
			},
			{
				id: 3,
				testCenterName: "Trofa Saúde Gaia",
				address: "Rua Fernão Magalhães 2 fração E, 4404-501 Vila Nova de Gaia",
				contact: {
					email: "info@trofasaude.com",
					phone: "220439600",
				},
				website: "trofasaude.pt",
				availableTests: {
					rapido: true,
					pcr: true,
					serologico: true,
					anticorpos: false,
				},
				openHours: "24h",
				likes: 0,
				rating: 1,
				comments: [
					{
						userComment: "Eduardo Nunes",
						comment: "Atendimento 5 estrelas!",
						userRating: 5,
					},
					{
						userComment: "Maria Gomes",
						comment: "Teste realizado com a maior rapidez e sem dor!",
						userRating: 4,
					},
				],
				Latlng: "41.1213249063888, -8.618567402173545",
				testsDone: 2,
			},
		];

		// Load the fixtures in case there is no data in the local storage
		if (!localStorage.users) {
			localStorage.setItem("users", JSON.stringify(users));
		}

		// Load the fixtures in case there is no data in the local storage
		if (!localStorage.testCenters) {
			localStorage.setItem("testCenters", JSON.stringify(testCenters));
		}
	}
}

new App();
