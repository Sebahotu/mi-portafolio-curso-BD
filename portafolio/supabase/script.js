// Mensaje de prueba para confirmar que se carga el script
console.log("Script cargado correctamente");

// Inicializar Supabase
const SUPABASE_URL = "https://mpdmtvumtublrifujnho.supabase.co"; // Reemplaza con tu URL
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1wZG10dnVtdHVibHJpZnVqbmhvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQxMzU3MTksImV4cCI6MjA0OTcxMTcxOX0.0JMeLQtDfgDtTU67nela9d_apFT9zPmFcFMBBDQ8-RM"; // Reemplaza con tu anon key
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Función para obtener datos
async function fetchData() {
    try {
        console.log("Intentando obtener datos...");

        // Realizar una consulta a la tabla 'products'
        const { data, error } = await supabase.from('productos').select('*');

        if (error) {
            console.error("Error al obtener datos:", error);
            return;
        }

        console.log("Datos obtenidos:", data);

    } catch (err) {
        console.error("Error al conectar a Supabase:", err);
    }
}

// Asignar el evento al botón
document.getElementById('fetchData').addEventListener('click', fetchData);