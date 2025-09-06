# 🌦️ Weather App 
# Electiva I
# Andrés Felipe Gañan Moreno

Aplicación web desarrollada con **React.js**, **TypeScript** y **Vite** que permite consultar el clima en tiempo real de una ubicación específica.  
Este proyecto forma parte de la materia *Electiva I Desarrollo Frontend* y tiene como objetivo reforzar conceptos de consumo de APIs, componentes funcionales y hooks.

---

## 📖 Contexto de la aplicación
La **Weather App** permite al usuario consultar condiciones climáticas actuales para una ciudad o región determinada.  
La información mostrada incluye:
- 🌡️ Temperatura  
- 💧 Humedad  
- ☁️ Estado general del clima  

El proyecto utiliza una **API pública de clima** ([OpenMeteo](https://open-meteo.com/)) para obtener los datos en tiempo real.

---

## 📋 Reglas de negocio
- El usuario debe poder introducir una ubicación (ciudad/región) para obtener datos del clima.
- La aplicación debe mostrar al menos: **temperatura, humedad y descripción del clima**.
- Manejo de estados:
  - **Cargando…** mientras la API responde.  
  - **Error amigable** si la ciudad no existe o la API falla.  
- La interfaz y mensajes estarán en **español**.  
- Tecnologías permitidas: **React.js + TypeScript + Vite**.  

---

## 🎯 Casos de uso

### 1. Consultar clima de una ciudad
- El usuario escribe el nombre de una ciudad y presiona **“Buscar”**.  
- El sistema consulta la API y muestra:
  - Temperatura  
  - Humedad  
  - Descripción del clima  
  - (Opcional) Ícono representativo  

### 2. Manejo de error
- Si la ciudad no existe o ocurre un problema con la API, se muestra un mensaje de error claro y amigable.  

### 3. Estado de carga
- Mientras se espera la respuesta de la API, se muestra un indicador de **“Cargando…”**.  

### 🔥 Opcional avanzado
- Historial de búsqueda de múltiples ciudades.  
- Fondos dinámicos según el estado del clima (soleado, lluvioso, nublado).  

---

## 🛠️ Tecnologías requeridas
- ⚛️ **React.js** (componentes funcionales)  
- 🟦 **TypeScript**  
- ⚡ **Vite** (entorno de desarrollo rápido)  
- 🪝 **Hooks**: `useState`, `useEffect`  
- 🌐 **fetch()** para consumo de APIs  
- 📜 Fundamentos de JavaScript (desestructuración, promesas, manejo de errores)  

---

## 🚀 Instalación y ejecución

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/anfega154/Electiva1_WeatherApp_Ga-an
   cd Electiva1_WeatherApp_ganan
   npm install
   npm run dev
 ```

