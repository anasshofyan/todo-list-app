- ## 🧑🏻‍💻 ReactJS #[[Technical Test]] - Dinas PPAPP Pemprov DKI Jakarta
  - ### Pengetahuan Dasar
    - #### 1. Apa itu React dan apa perbedaan utamanya dengan framework JavaScript lainnya seperti Angular atau Vue?
      collapsed:: true
      - #### Answer
        - React adalah sebuah library untuk membuat sebuah tampilan yang dinamis dan interaktif, Reactdikembangkan oleh Facebook. Konsep utama dari React adalah penggunaan components nya itu bisa digunakan kembali atau reusable components, dimana itu sangat membantu dan berguna untuk developer seperti saya, karena dengan membuat satu components itu bisa saya gunakan di page lain, seperti Button, TextField, Form, Card, dll.
        - Secara perbedaan React dan Angular atau Vue jelas berbeda karena Angular dan Vue itu framework JavaScript, sedangkan React adalah library. Sedangkan dari pengguna React memiliki pengguna paling banyak dan mempunyai komunitas paling besar daripada Vuejs dan Angular.
        - Perbedaan selanjutnya dari segi Virtual DOM
          - React dan Vue menggunakan Virtual DOM (Data Object Model), untuk update UI yang cepat, sedangkan Angular tidak.
        - Perbedaan Components
          - React menganggap semua adalah components, dan setiap components React memiliki state sendiri2, components react biasanya dibuat dengan format .jsx/tsx
          - Angular menggunakan Ts dengan decorator untuk inisialisasi komponent nya dan template nya ditulis pada HTML
          - Vue menggunakan file dengan format .vue dengan kombinasi <template>, <script>, dan <style>.
        - Perbedaan dari Arsitektur
          - React sebagai library maka fokus nya ke tampilan dan menggunakan components sebagai blok renderingnya, kemudian hanya menangani layer tampilan dan banyak mengandalkan library lain.
          - Angular sebagai framework maka angular mempunyai framework yang lebgkap dibandingkan reactjs, state, routing, communication server sudah termasuk didalamnya.
          - Vue sebetulnya juga mirip dengan react, tetapi mempunyai state management sendiri seperti Vuex dan Vue Router
    - #### 2. Jelaskan konsep Virtual DOM dan bagaimana React menggunakannya untuk meningkatkan performa aplikasi.
      collapsed:: true
      - #### Answer
        - DOM (Data Object Model) adalah sebuah represntasi sebuah object dari sebuah html diubah menjadi object pada browser kemudian ditampilkan ke ui nya
        - Cara kerja DOM di React
          - Aplikasi pertama kali dijalankan, react akan membuat virtual DOM yang mencerminkan struktur dari UI aplikasi nya.
          - Ketika ada perubahan pada data atau state, react akan merender ulang virtual DOM yang baru sesuai dengan apa yang berubah
          - React akan membandingkan (diffing) dengan virtual DOM baru dengan yang lama, untuk mengetahui bagaian mana ui yang kira2 terupdate.
          - Setelah tau dimana perbedaannya, react hanya akan mengubah bagian yang perlu di DOM aslinya, proses itu namanya reconciliation.
          - Dengan mengupdate bagian berubah, maka viirtual DOM bisa mengurangi manipulasi DOM langsung sehingga bisa meningkatkann performa aplikasui
        - Performa
          - Dengan mengurangi proses operasi pada DOM, virtual DOM membuat update yang lebih cepat dan efisian
          - Dengan hanya memperbarui elemen yang berubah saja, vierual DOM akan meminimalkan update yang tidak perlu, sehingga itu sangat berguna pada aplikasi UI yang kompleks
  - ### Pemahaman Komponen
    - #### 3. Apa itu komponen dalam React? Jelaskan perbedaan antara komponen fungsional dan komponen kelas.
      - #### Answer
        - Components adalah sebuah blok atau susunan yang bisa membentuk sebuah UI pada react
        - Perbedaaan Function Components dan Class Components
          - Function Components adalah komponent yang difefinisikan sebagai fungsi pada js, dan bisa menerima parameter berupa props dan mengembalikan sebuah elemen pada react.
            - Pada function components untuk state dan Lifecycle, menggunakan hook seperti `useState` (untuk menyimpan state), `useEffect` (untuk menjalankan atau pertama kali di render atau ada update state akan berfungsi)
            - ```jsx
              function FuncComponents(props) {
                return <h1>Hello, {props.name}</h1>;
              }
              ```
          - Class Components adalah komponen yang difenisikan sebagai kelas js yang memperluaas `React.Component` dan harus memiliki method `render` untuk return element react
            - State dan Lifecycle nya memiliki state internal yang di inisialisasi dalam constructor dan bisa mengakses method seperti `componentDidMount`, dan `componentDidUpdate`, dan `componentWillUnmount`.
            - ```jsx
              class ClassComponents extends React.Component {
                constructor(props) {
                  super(props);
                  this.state = { name: "World" };
                }

                render() {
                  return <h1>Hello, {this.props.name}</h1>;
                }
              }
              ```
          -
        -
    - #### 4. Bagaimana cara membuat komponen stateless dan stateful dalam React? Berikan contoh kode sederhana.
      collapsed:: true
      - #### Answer
        - Statless
          collapsed:: true
          - ```jsx
            function Profile(props) {
              return (
                <h1>
                  Halo, {props.name}, I`m {props.title}!
                </h1>
              );
            }

            <Profile name="Anas SMF" title="Frontend Dev" />;
            ```
        - Statefull
          collapsed:: true
          - ```jsx
            function CounterIncrement() {
              const [count, setCount] = useState(0);

              const incrementCount = () => {
                setCount(count + 1);
              };

              return (
                <div>
                  <p>Count: {count}</p>
                  <button onClick={incrementCount}>Add</button>
                </div>
              );
            }
            ```
        -
    - #### 5. Jelaskan konsep props dan state dalam React. Apa perbedaan utama antara keduanya?
      collapsed:: true
      - #### Answer
        - Props (properties), sebuah object atau sebuah fungsi yang berisi sebuah data yang diteruskan dari component parent ke components child
        - State adalah obejct yang digunakan untuk menyimpan data yang dimiliki dan bisa diatur oleh components itu sendiri.
  - ### State Management
    collapsed:: true
    - #### 6. Apa itu state lifting dan kapan Anda perlu menggunakannya?
      collapsed:: true
      - #### Answer
        - State lifiting adalah konsep dalam react yang dimana state yang dibutuhkan oleh beberapa komponent child itu di pindahkan (diangkat) ke komponent parent bersama component itu, kemudian component parent itu yang kemudian mengelola state dan meneruskan data serta fungsi oleh komponent chuld melalui props.
        - Contoh
          collapsed:: true
          - ```jsx
            function TextField({ value, onChange }) {
              return (
                <input
                  type="text"
                  value={value}
                  onChange={(e) => onChange(e.target.value)}
                />
              );
            }
            ```
          - ```jsx
            function Display({ value }) {
              return <p>Input: {value}</p>;
            }
            ```
          - ```jsx
            function ParentComponent() {
              const [inputValue, setInputValue] = useState("");

              return (
                <div>
                  <TextField value={inputValue} onChange={setInputValue} />
                  <Display value={inputValue} />
                </div>
              );
            }
            ```
        - Penggunaanya jika ada beberapa compinent perlu berbagi atau menyingkronkan state yang sama. dan memastikan konsistensi data seluruh komponent yang membutuhkannya.
    - #### 7. Apa itu Context API dalam React dan kapan sebaiknya digunakan?
      - #### Answer
        - Context API adalah sebuah mekanisme untuk berbagi data antar komponen tanpa harus melewati props secara manual (props drilling) pada setiap tingkat komponen. Digunakan ketika ada banyak komponent yang memerlukan akses data yang sama dan menghindari props drilling, konsep nya mirip dengan state management
    - #### 8. Jelaskan bagaimana Redux bekerja dan bagaimana ia dapat digunakan dalam aplikasi React. Berikan contoh singkat pengaturan Redux store.
      collapsed:: true
      - #### Answer
        collapsed:: true
        - Redux adalah library state management, sering digunakan pada React. Redux menyediakan cara untuk mengelola state secara global dalam sebuah store yang terpusat, cocok untuk aplikasi yang sangat kompleks.
          - Cara kerja redux
            - Seluruh state app disimpan dalam satu object js, yang biasa disebut sebagai store, sehingga membuat state mudah diakses
            - State hanya bisa diubah dengan mengirimkan `action` yang mendeskripsikan perubahan yang diinginkan. Action adalah objkect yang memiliki props `type`, dan `payload`
            - Untuk menentukan state yang harus diubah terhahdap action, maka redux menggunakan `reducer` yaitu fungsu untuk mengambil state sebelelumnya dan action sebagai argumen, dan return state baru.
          - ## Contoh
            ```jsx
            /// store.js
            import { createStore } from "redux";
            import rootReducer from "./reducers";

            const store = createStore(rootReducer);

            export default store;
            ```
            - ```jsx
              /// reducers.js
              const initialState = {
                counter: 0,
              };

              function counterReducer(state = initialState, action) {
                switch (action.type) {
                  case "INCREMENT":
                    return {
                      ...state,
                      counter: state.counter + 1,
                    };
                  case "DECREMENT":
                    return {
                      ...state,
                      counter: state.counter - 1,
                    };
                  default:
                    return state;
                }
              }

              export default counterReducer;
              ```
            - ```jsx
              /// actions.js
              export const increment = () => ({
                type: "INCREMENT",
              });

              export const decrement = () => ({
                type: "DECREMENT",
              });
              ```
            - ```jsx
              ///app.js / main.js
              import React from "react";
              import ReactDOM from "react-dom";
              import { Provider } from "react-redux";
              import App from "./App";
              import store from "./store";

              ReactDOM.render(
                <Provider store={store}>
                  <App />
                </Provider>,
                document.getElementById("root"),
              );
              ```
            - ```jsx
              /// home.js
              import React from "react";
              import { useSelector, useDispatch } from "react-redux";
              import { increment, decrement } from "./actions";

              function Home() {
                const counter = useSelector((state) => state.counter);
                const dispatch = useDispatch();

                return (
                  <div>
                    <h1>Counter: {counter}</h1>
                    <button onClick={() => dispatch(increment())}>
                      Increment
                    </button>
                    <button onClick={() => dispatch(decrement())}>
                      Decrement
                    </button>
                  </div>
                );
              }

              export default Home;
              ```
  - ### Lifecycle Methods
    collapsed:: true
    - #### 9. Sebutkan beberapa lifecycle methods dalam React class components dan jelaskan kapan masing-masing dipanggil.
      - #### Answer
        - `constructor(props)` dipanggil saat component dibuat pertama kali, dan untuk inisialisasi state
        - `componentDidMount()` dipanggil saat component dirender ke DOM, biasanya digunakan untuk fetchAPI dan event listener
        - `componentDidUpdate(prevProps, prevState)` dipanggil setelah component di perbarui, dan digunakan untuk menangani perubahan bedasarkan props atau state baru
        - `componentWillUnmount` dipanggil sebelum komponent dihapus oleh DOM, biasanya digunakan untuk membersihkan event listener dan mengnentikan proess async
    - #### 10. Bagaimana cara menggunakan hooks seperti useEffect untuk mensimulasikan lifecycle methods dalam functional components? Berikan contoh.
      - #### Answer
        ## collapsed:: true
        ```jsx
        useEffect(() => {
          // componentDidMount
          fetch("https://api.example.com/data")
            .then((response) => response.json())
            .then((data) => setData(data));
        }, []);
        ```
        - ```jsx
          useEffect(() => {
            // componentDidUpdate
            fetch(`https://api.example.com/data/${id}`)
              .then((response) => response.json())
              .then((data) => setData(data));
          }, [id]); // jika ada id yang berubah dia akan beroperasi
          ```
        - ```jsx
          useEffect(() => {
            const interval = setInterval(() => {
              setCount((prevCount) => prevCount + 1);
            }, 1000);

            // componentWillUnmount
            return () => clearInterval(interval);
          }, []);
          ```
  - ### Routing
    collapsed:: true
    - #### 11. Bagaimana cara mengimplementasikan routing dalam aplikasi React menggunakan react-router
      dom? Jelaskan dan berikan contoh.
    - #### 12. Bagaimana cara menangani protected routes dalam React?
  - ### Forms dan Validasi
    collapsed:: true
    - #### 13. Bagaimana cara mengelola form input dalam React? Berikan contoh penggunaan controlled components.
      collapsed:: true
      - #### Answer
        - pertama saya membuat state untuk menyimpan data input
        - membuat fungsi handleCnagne untuk memasukan data kedalam state
        - ## membuat fungsi handleSubmit untuk mengirimkan data seluruhnya ke endpoint
          ```jsx
          import React, { useState } from "react";

          function RegisterForm() {
            const [formData, setFormData] = useState({
              username: "",
              email: "",
              password: "",
            });

            const handleChange = (event) => {
              const { name, value } = event.target;
              setFormData({
                ...formData,
                [name]: value,
              });
            };

            const handleSubmit = (event) => {
              event.preventDefault();
              alert(`Form submitted: ${JSON.stringify(formData)}`);
            };

            return (
              <form onSubmit={handleSubmit}>
                <label>
                  Username:
                  <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                  />
                </label>
                <br />
                <label>
                  Email:
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </label>
                <br />
                <label>
                  Password:
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </label>
                <br />
                <button type="submit">Submit</button>
              </form>
            );
          }

          export default RegisterForm;
          ```
    - #### 14. Bagaimana cara melakukan validasi form dalam React? Berikan contoh penggunaan library seperti Formik atau React Hook Form.
      collapsed:: true
      - #### Answer
        - disini saya menggunakan Formik
        - ```jsx
          import React from "react";
          import { Formik, Form, Field, ErrorMessage } from "formik";
          import * as Yup from "yup";

          // melakukan inisialisasi state
          const initialValues = {
            name: "",
            email: "",
            password: "",
          };

          // validasi menggunakan yup, validasinya bisa required, regex, type data dll
          const validationSchema = Yup.object({
            name: Yup.string().required("Nama harus diisi"),
            email: Yup.string()
              .email("Email tidak valid")
              .required("Email harus diisi"),
            password: Yup.string()
              .min(6, "Password minimal 6 karakter")
              .required("Password harus diisi"),
          });

          // untuk mengirimkan semua data ke endpoint
          const onSubmit = (values) => {
            console.log(values);
          };

          const RegisterForm = () => (
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              <Form>
                <div>
                  <label htmlFor="name">Nama</label>
                  <Field type="text" id="name" name="name" />
                  <ErrorMessage name="name" component="div" />
                </div>

                <div>
                  <label htmlFor="email">Email</label>
                  <Field type="email" id="email" name="email" />
                  <ErrorMessage name="email" component="div" />
                </div>

                <div>
                  <label htmlFor="password">Password</label>
                  <Field type="password" id="password" name="password" />
                  <ErrorMessage name="password" component="div" />
                </div>

                <button type="submit">Submit</button>
              </Form>
            </Formik>
          );

          export default RegisterForm;
          ```
  - ### Integrasi dengan Backend
    collapsed:: true
    - #### 15. Bagaimana cara melakukan fetch data dari API dalam React? Jelaskan dengan contoh menggunakan fetch atau axios.
      - #### Answer
        ## collapsed:: true
        ```jsx
        import React, { useState, useEffect } from "react";

        const FetchAPI = () => {
          const [data, setData] = useState(null); // untuk menyimpan data
          const [loading, setLoading] = useState(true); // loading

          useEffect(() => {
            // fungsi untuk menjalankan fetch pada endpoint
            const fetchData = async () => {
              try {
                const response = await fetch("https://api.com/data");
                if (!response.ok) {
                  throw new Error("Jaringan bermasalah");
                }
                const jsonData = await response.json();
                setData(jsonData);
                setLoading(false);
              } catch (error) {
                console.error("Tidak bisa fetch data: ", error);
                setLoading(false);
              }
            };

            fetchData(); // akan dijalankan ketika pertama kali dirender
          }, []);

          if (loading) {
            return <p>Loading...</p>;
          }

          return (
            <div>
              {data && (
                <ul>
                  // data akan di tampilkan disini
                  {data.map((item) => (
                    <li key={item.id}>{item.name}</li>
                  ))}
                </ul>
              )}
            </div>
          );
        };

        export default FetchAPI;
        ```
    - #### 16. Bagaimana cara mengelola state global untuk data yang diambil dari API?
      - #### Answer
        - Disini saya menggunakan context untuk menyimpan result dari endpoint
        - ```jsx
          // DataContsxt.js
          import React, {
            createContext,
            useState,
            useContext,
            useEffect,
          } from "react";

          // pertama inisialisasi dengan membuat DataContext dengan createContext
          const DataContext = createContext();

          export const useDataContext = () => useContext(DataContext);

          export const DataProvider = ({ children }) => {
            const [data, setData] = useState(null);
            const [loading, setLoading] = useState(true);

            useEffect(() => {
              // fungsi untuk fetch data
              const fetchData = async () => {
                try {
                  const response = await fetch("https://api.com/data");
                  if (!response.ok) {
                    throw new Error("Jaringan error");
                  }
                  const jsonData = await response.json();
                  setData(jsonData);
                  setLoading(false);
                } catch (error) {
                  console.error("Gagal fetch data: ", error);
                  setLoading(false);
                }
              };

              fetchData(); // dijalankan ketika pertama kali di render
            }, []);

            return (
              <DataContext.Provider value={{ data, loading }}>
                {children}
              </DataContext.Provider>
            );
          };

          //cara penggunaan
          // tinggal import saja di component yang akan digunakan utnik menampilkan data, dan bisa diakses secara global
          const { data, loading } = useDataContext();
          ```
  - ### Optimisasi dan Best Practices
    collapsed:: true
    - #### 17. Apa itu code splitting dan bagaimana cara menerapkannya dalam aplikasi React?
      collapsed:: true
      - #### Answer
        - ## Code spiliting adalah teknik untuk memisahkan code app menjadi bagian-bagian yang lebih kecil, dan kemudian bisa di load secara terpisah-pisah sesuai dengan kebutuhan, tujuannya adalah untuk meningkatkan perofma dan mempercepat waktu render.
          ```jsx
          import React, { useState } from "react";

          const ComponentSpliting = () => {
            const [isComponentLoaded, setIsComponentLoaded] = useState(false);

            const loadComponent = async () => {
              const { default: ProfileComponent } = await import(
                "./ProfileComponent"
              );
              setIsComponentLoaded(true);
            };

            return (
              <div>
                // ProfileComponent akan tampil jika di klik
                <button onClick={loadComponent}>Tampilkan Profile</button>
                {isComponentLoaded && <ProfileComponent />}
              </div>
            );
          };

          export default ComponentSpliting;

          // prosesnya ketika pertama kali di render, ProfileCompinent tidak ikut dirender, ketika di klik maka akan dirender, itu akan mempercepat proses rendering dan performa aplikasi
          ```
    - #### 18. Jelaskan cara mengoptimalkan performa aplikasi React, misalnya dengan memoization atau penggunaan React.memo.
      collapsed:: true
      - #### Answer
        collapsed:: true
        - ## Memoization adalah teknik untuk menyimpan hasil dari proses calculate computed (seperti penghitungan berulang atau pemanggilan API) sehingga hasilnya dapat di-cache dan digunakan kembali saat input tidak berubah.
          ```jsx
          import React, { useState, useMemo } from "react";

          const ExpenseComponent = ({ count }) => {
            const calculateExpensiveValue = (count) => {
              console.log("Computing expensive value...");
              let result = 0;
              for (let i = 0; i < count; i++) {
                result += i;
              }
              return result;
            }; // dari hasil calculateExpensiveValue akan disimpan dalam expensiveValue dan digunakan kembali saat count tidak berubah.

            const expensiveValue = useMemo(
              () => calculateExpensiveValue(count),
              [count],
            ); // digunakan untuk menghitung expensiveValue hanya jika count berubah.

            return (
              <div>
                <p>Count: {count}</p>
                <p>Expensive Value: {expensiveValue}</p>
              </div>
            );
          };

          export default ExpenseComponent;
          ```
    - #### 19. Apa itu lazy loading dan bagaimana cara menggunakannya dalam React? Berikan contoh.
      collapsed:: true
      - #### Answer
        - Lazy loading adalah teknik di mana komponen atau asset aplikasi dimuat secara dinamis hanya saat dibutuhkan, seperti code spliting. Hal ini membantu mengurangi waktu load awal aplikasi dengan memuat hanya bagian-bagian yang diperlukan saat user mengaksesnya, daripada memuat semuanya sekaligus.
          collapsed:: true
          - ```jsx
            import React, { Suspense } from "react";

            // Lazy load
            const LazyComponent = React.lazy(
              () => import("./LazyLoadComponents"),
            );

            const App = () => (
              <div>
                <h1>Home</h1>
                <Suspense fallback={<div>Loading...</div>}>
                  <LazyComponent />
                </Suspense>
              </div>
            );

            export default App;
            ```
  - ### Tes Koding Praktis
    collapsed:: true
    - #### 20. Berikan tugas untuk membuat aplikasi to-do list sederhana dengan fitur tambah, hapus, dan tandai sebagai selesai.
      - #### Answer
        - Link App [Planet | Todo List (todo-list-app-ten-snowy.vercel.app)](https://todo-list-app-ten-snowy.vercel.app/to-do)
        - Link Github [General (github.com)](https://github.com/anasshofyan/todo-list-app/settings)
        -
    - #### 21. Buat sebuah komponen yang mengambil data dari API dan menampilkan daftar item. Tambahkan fitur loading state dan error handling.
      - #### Answer
        - Link [Planet | List Eclipse (todo-list-app-ten-snowy.vercel.app)](https://todo-list-app-ten-snowy.vercel.app/)
        - Link Github [General (github.com)](https://github.com/anasshofyan/todo-list-app/settings)
  - ### Pertanyaan Problem Solving
    collapsed:: true
    - #### 22. Bagaimana Anda akan menangani kasus dimana sebuah komponen perlu mengakses data dari beberapa sumber sekaligus?
      collapsed:: true
      - #### Answer
        - Ketika ada case seperti itu, dan jika komponen perlu load data dari beberapa endpoint sekaligus tetapi tidak tergantung satu sama lain, saya menggunakan `useEffect` untuk memanggil fungsi pemanggilan API secara paralel.
        - ## Kemudian saya menggunakan `Promise.all` untuk memanggil endpoint secara paralel, dan `useState` digunakan untuk menyimpan data
          ```jsx
          const [data1, setData1] = useState(null);
          const [data2, setData2] = useState(null);

          useEffect(() => {
            const fetchData = async () => {
              const [response1, response2] = await Promise.all([
                axios.get("https://api.com/data1"),
                axios.get("https://api.com/data2"),
              ]);
              setData1(res1.data);
              setData2(res2.data);
            };

            fetchData();
          }, []);
          ```
    - #### 23. Apa yang akan Anda lakukan jika mendapati sebuah komponen yang terlalu besar dan sulit di-maintain? Bagaimana strategi Anda untuk memecah komponen tersebut?
      collapsed:: true
      - #### Answer
        - ![The guide to Atomic Design - Justinmind](https://assets.justinmind.com/wp-content/uploads/2021/01/atomic-design-what-it-is.png)
        - Disini saya akan menerapkan sebuah automic component, atomic adalah sebuag metodologi yang digunakan untuk mengorganisis component2 menjadi tingkatan yang lebnih kecil dan terpisah, mirip seperti struktur atom, molekul, organisme, template dan halaman.
          - Contoh
            - Atom -> component paling dasar
              - Button
              - Input
              - Label
            - Molecule -> terdiri dari beberapa atom yang digabungkan membentuk komponent yang komplekas
              - Form Login
              - Form Register
            - Organisme -> lenih komplekas dari molekul terdiri dari molekuk dan atau atom
              - User Profile
            - Template -> mengabungkan beberapa organisme
              - Dashboard Template
            - Page -> implementasi dari template
              - HomePage
  - ### Studi Kasus
    collapsed:: true
    - #### 24. Berikan sebuah studi kasus dimana Anda harus mengembangkan sebuah fitur baru dalam aplikasi React yang sudah ada. Bagaimana Anda akan merencanakan dan mengimplementasikan fitur tersebut?
      - #### Answer
        - Pertama saya akan analisa requirement terlebih dahulu, seperti deskripsi fiturnya, dan syarat fungsionalitasnya, dan non fungsionalitasi
        - Kemudian saya membuat plan untuk implementasi, seperti kira2 component apa saja yang akan digunakan, kemudian ada package atau library apa yang digunakan.
        - Kemudian saya akan implementasi
        - Setelah implementasi saya melakukan unit testing
        - Terakhir melakukan deployment ke staging agar bisa di test oleh QA
    - #### 25. Anda diberikan tugas untuk mengoptimalkan performa aplikasi React yang lambat. Langkah langkah apa yang akan Anda ambil untuk mengidentifikasi dan memperbaiki masalah performa tersebut?
      collapsed:: true
      - #### Answer
        - Disini saya menggunakan Lighthouse untuk mengoptimalkan peprforma karena tolls ini sangat lengjkap dan tahu dimana file atau memberikan saran apa yang harus diperbaiki.
          - Pertama menjalankan audit performa
          - Menganalisis hasil audit dari lighthouse
          - Menerapkan hasil rekomendasi dari lighthouse
          - menerapkan perbaikan
          - re-audit dan test lanjut
  - #### Espektasi Gaji
    - Dengan ekspektasi gaji saya sekarang sekitar 14.000.000 IDR netto. Ini tentu bisa di diskusikan.
