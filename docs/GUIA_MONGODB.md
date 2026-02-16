# Guía de Configuración de MongoDB Atlas

Sigue estos pasos para crear tu base de datos en la nube y conectarla a Lari Stinu.

## 1. Crear Cuenta y Cluster
1.  Ve a [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register) y regístrate (es gratis).
2.  Crea un nuevo proyecto.
3.  Selecciona **Build a Database**.
4.  Elige la opción **M0 FREE** (Gratis para siempre).
5.  Selecciona un proveedor (AWS) y una región cercana (ej. N. Virginia).
6.  Haz clic en **Create**.

## 2. Configurar Seguridad (Usuario y Acceso)
1.  **Username and Password**: Crea un usuario para la base de datos.
    *   *Username*: `admin` (o lo que prefieras)
    *   *Password*: Genera una segura y **GUÁRDALA** (la necesitarás luego).
    *   Haz clic en **Create User**.
2.  **IP Access List**:
    *   Haz clic en **Add My Current IP Address** si solo tú vas a acceder.
    *   O para desarrollo fácil, escribe `0.0.0.0/0` en "Access List Entry" (permite acceso desde cualquier lugar, útil para pruebas).
    *   Haz clic en **Add Entry**.
3.  Haz clic en **Finish and Close**.

## 3. Obtener la Cadena de Conexión
1.  En tu Dashboard, busca tu Cluster y haz clic en **Connect**.
2.  Selecciona **Drivers**.
3.  Asegúrate que "Driver" sea **Node.js** y la versión **4.1 or later**.
4.  Copia la cadena de conexión que se ve algo así:
    `mongodb+srv://admin:<password>@cluster0.p8q81.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`

## 4. Configurar el Proyecto
1.  En VS Code, crea un archivo llamado `.env.local` en la raíz del proyecto (junto a `package.json`).
2.  Pega la cadena de conexión:
    ```env
    MONGODB_URI=mongodb+srv://admin:TU_CONTRASEÑA@cluster0.p8q81.mongodb.net/lari_stinu?retryWrites=true&w=majority
    ```
3.  **IMPORTANTE**: Reemplaza `<password>` (o `TU_CONTRASEÑA`) por la contraseña real que creaste en el paso 2.
    *   Si tu contraseña tiene símbolos especiales, asegúrate de codificarlos o usa una contraseña alfanumérica simple para probar.
    *   Reemplaza `test` (después de `.net/`) por el nombre de tu base de datos, ej: `lari_stinu`.

¡Listo! Guarda el archivo y avísame.
