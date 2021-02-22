import { useForm } from "react-hook-form";

import Head from "next/head";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function About() {

  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    <>
      <Head>
        <title>Form</title>
      </Head>
      <Header />
      <Layout>
            {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
            <form onSubmit={handleSubmit(onSubmit)}>
              <label htmlFor="example" className="block text-sm font-medium text-gray-700 mt-6">
                Example
              </label>
              {/* register your input into the hook by invoking the "register" function */}
              <input name="example" type="text" defaultValue="test" ref={register} />

              <label htmlFor="exampleRequired" className="block text-sm font-medium text-gray-700 mt-6">
                exampleRequired
              </label>
              {/* include validation with required or other standard HTML validation rules */}
              <input name="exampleRequired" type="text" ref={register({ required: true })} />
              {/* errors will return when field validation fails  */}
              {errors.exampleRequired && <p className="text-red-500">This field is required</p>}

              <button type="submit" className="block justify-center py-2 px-4 mt-6 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Send
              </button>
            </form>
      </Layout>
      <Footer />
    </>
  );
}
