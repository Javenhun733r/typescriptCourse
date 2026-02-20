import axios from 'axios';
import L from 'leaflet';

const form = document.querySelector('form')!;
const addressInput = document.getElementById('address')! as HTMLInputElement;

const GEOAPIFY_API_KEY = 'GEOAPIFY_API_KEY';

type GeoapifyResponse = {
	features: {
		geometry: {
			coordinates: [number, number];
		};
		properties: {
			formatted: string;
		};
	}[];
};

let map: L.Map;
let marker: L.Marker;

function searchAddressHandler(event: Event) {
	event.preventDefault();
	const enteredAddress = addressInput.value;

	axios
		.get<GeoapifyResponse>(
			`https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(
				enteredAddress,
			)}&apiKey=${GEOAPIFY_API_KEY}`,
		)
		.then(response => {
			if (response.data.features.length === 0) {
				throw new Error('Address not found!');
			}

			const [longitude, latitude] =
				response.data.features[0].geometry.coordinates;
			const coords: [number, number] = [latitude, longitude];

			if (!map) {
				map = L.map('map').setView(coords, 16);

				L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
					attribution: '&copy; OpenStreetMap contributors',
				}).addTo(map);
			} else {
				map.setView(coords, 16);
			}

			if (marker) {
				marker.setLatLng(coords);
			} else {
				marker = L.marker(coords).addTo(map);
			}

			marker
				.bindPopup(response.data.features[0].properties.formatted)
				.openPopup();
		})
		.catch(err => {
			alert(err.message);
			console.error(err);
		});
}

form.addEventListener('submit', searchAddressHandler);
