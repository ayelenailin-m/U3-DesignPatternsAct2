# Patrones de Diseño en TypeScript

**Alumna:** Miño Ailín\
**Materia:** TLP V

Este proyecto implementa cuatro patrones de diseño clásicos en **TypeScript**

---

## Ejecución

1.  Instalar dependencias:

```bash
npm install
```

2.  Correr en modo desarrollo (con reinicio automático):

```bash
npm run dev
```

---

## Estructura del Proyecto

    src/
      app.ts
      observer/
      adapter/
      singleton/
      factory/

Cada módulo contiene:

- `interfaces/` → contratos comunes

- `class/` → implementación de cada patrón
- `index.ts` → demo de ejecución

---

## Patrones Implementados

### 1. Observer (Profesor → Alumnos)

**Idea:** un publicador notifica automáticamente a todos sus
subscriptores.\
**Uso en el proyecto:** un `Professor` publica tareas y los `Student`
suscriptos reciben la notificación.

**Código clave:**

```ts
prof.publish("Actividad 2 - Design Patterns — entrega martes 13:00.");
// -> Todos los alumnos suscriptos reciben la notificación
```

---

### 2. Adapter (Fetch ↔ Axios)

**Idea:** permite cambiar la implementación de una librería/API sin
modificar el cliente.\
**Uso en el proyecto:** `SimpleHttpClient` usa un adapter
(`FetchAdapter` o `AxiosAdapter`) para hacer requests HTTP.

**Código clave:**

```ts
const client = new SimpleHttpClient(new FetchAdapter());
const withFetch = await client.get<Todo>(url);

client.setAdapter(new AxiosAdapter());
const withAxios = await client.get<Todo>(url);
```

---

### 3. Singleton (ConexionDB de Inventario)

**Idea:** garantiza que solo exista una única instancia de una clase.\
**Uso en el proyecto:** `ConexionDB` asegura que toda la aplicación use
la misma conexión.

**Código clave:**

```ts
const db1 = ConexionDB.getInstance({ host:"localhost", port:5432, ... });
db1.connect();

const db2 = ConexionDB.getInstance(); // misma instancia que db1
db2.connect();
```

---

### 4. Factory (Notificaciones Email/SMS/WhatsApp)

**Idea:** encapsula la creación de objetos, devolviendo instancias según
un parámetro.\
**Uso en el proyecto:** `NotifierFactory` crea instancias de
`EmailNotifier`, `SmsNotifier` o `WhatsappNotifier`.

**Código clave:**

```ts
const email = NotifierFactory.create("email");
email.send(
  "ana@mail.com",
  "Recordatorio: Entregar la tarea antes de las 13:00."
);

const sms = NotifierFactory.create("sms");
sms.send(
  "+54937095300940",
  "Se suspenden las actividades acádemicas por reparaciones de la red."
);

const wa = NotifierFactory.create("whatsapp");
wa.send("+54937095052841", "El menú del día es: Pollo con sopa paraguaya.");
```

## Conclusión

- **Observer**: facilita la comunicación automática uno-a-muchos.
- **Adapter**: permite intercambiar librerías sin modificar el
  cliente.
- **Singleton**: asegura una sola instancia de un recurso global
  (DB).
- **Factory**: simplifica la creación de objetos y desacopla al
  cliente.

Estos patrones son fundamentales para escribir código más flexible,
escalable y mantenible.
