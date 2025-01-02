import { FormEvent, useEffect, useState } from "react"
import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../../services/firebaseConnection";

export function Networks() {
  const [github, setGithub] = useState("");
  const [whasapp, setWhasapp] = useState("");
  // const [email, setEmail] = useState("");

  useEffect(() => {
    function loadlinks() {
      const docRef = doc(db, "social", "link")
      getDoc(docRef)
        .then((snapshot) => {
          if (snapshot.data() !== undefined) {
            setGithub(snapshot.data()?.github)
            setWhasapp(snapshot.data()?.whasapp)
            // setEmail(snapshot.data()?.email)
          }

        })

    }
    loadlinks();
  }, [])

  function handleRegister(e: FormEvent) {
    e.preventDefault();

    setDoc(doc(db, "social", "link"), {
      github: github,
      whasapp: whasapp,
      // email: email
    })
      .then(() => {
        console.log("CADASTRADO COM SUCESSO!!");
      })
      .catch((error) => {
        console.log("ERRO AO SALVAR " + error);
      })
  }


  return (
    <div className="flex items-center flex-col min-h-screen pb-7 px-2">
      <Header />
      <h1 className="text-white text-2xl font-medium mt-8 mb-4">Minhas redes sociais</h1>
      <form className="flex flex-col max-w-xl w-full" onSubmit={handleRegister}>
        <label className="text-white font-medium mt-2 mb-2">Link do github</label>
        <Input
          type="url"
          placeholder="Digite a url do facbook"
          value={github}
          onChange={(e) => setGithub(e.target.value)}
        />
        <label className="text-white font-medium mt-2 mb-2">Link do whasapp</label>
        <Input
          type="url"
          placeholder="Digite a url do whasapp"
          value={whasapp}
          onChange={(e) => setWhasapp(e.target.value)}
        />
        {/* <label className="text-white font-medium mt-2 mb-2">Link do email</label>
        <Input
          type="url"
          placeholder="Digite a url do email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /> */}
        <button
          type="submit"
          className="text-white bg-blue-600 h-9 rounded-md items-center justify-center flex mb-7 font-medium">
          Salvar Links
        </button>
      </form>
    </div>
  )
}