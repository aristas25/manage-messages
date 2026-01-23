import React, { useState, useEffect } from "react";
import Button from "./common/Button";
import { Card, CardHeader, CardTitle, CardContent } from "./common/Card";
import config from "../config";
import { 
  MessageCircle, 
  Zap, 
  Globe, 
  Code, 
  Users, 
  Check, 
  Rocket,
  Building2,
  Mail,
  ArrowRight,
  Shield,
  Lock
} from "lucide-react";
import * as utils from "../utils/utils";

export default function Web() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const isMobile = window.innerWidth < 768;

  useEffect(() => {
    const handleResize = () => {
      // Handle resize if needed
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Carousel de imágenes/videos (simulado con imágenes por ahora)
  const carouselItems = [
    {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=800&fit=crop',
      alt: 'Persona codeando'
    },
    {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop',
      alt: 'Equipo trabajando'
    },
    {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&h=800&fit=crop',
      alt: 'Desarrollo de software'
    }
  ];

  // Logos de clientes de ejemplo (puedes reemplazarlos después)
  const clientLogos = [
    { name: 'Binapsis', logo: '	https://www.binapsis-software.com/logo-binapsis.svg' },
    { name: 'Manicurias', logo: 'https://manicura-5083fd69e6f3.herokuapp.com/logo-manicura.svg' },
    { name: 'Peluquerías', logo: 'https://peluca-79e344313ea6.herokuapp.com/logo-peluca.svg' },
    { name: 'Mascotas', logo: 'https://mascotas-b555111cf1f4.herokuapp.com/logo-mascotas.svg' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3">
              <img
                src={process.env.PUBLIC_URL + utils.getBrandLogo()}
                alt={config.brand}
                className="h-16 md:h-20 w-auto object-contain"
              />
            </div>
            {isMobile ? (
              <button
                className="p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Menu"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {menuOpen ? (
                    <path d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            ) : (
              <nav className="flex items-center gap-6">
                <a href="#servicio" className="text-sm font-medium text-gray-700 hover:text-slate-800 transition-colors">
                  Servicio
                </a>
                <a href="#por-que" className="text-sm font-medium text-gray-700 hover:text-slate-800 transition-colors">
                  ¿Por qué elegirnos?
                </a>
                <a href="#clientes" className="text-sm font-medium text-gray-700 hover:text-slate-800 transition-colors">
                  Clientes
                </a>
                <a href="#para-quien" className="text-sm font-medium text-gray-700 hover:text-slate-800 transition-colors">
                  Para quién
                </a>
                <a href="#contacto" className="text-sm font-medium text-gray-700 hover:text-slate-800 transition-colors">
                  Contacto
                </a>
              </nav>
            )}
          </div>
          {menuOpen && isMobile && (
            <div className="pb-4 space-y-2">
              <a href="#servicio" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md">
                Servicio
              </a>
              <a href="#por-que" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md">
                ¿Por qué elegirnos?
              </a>
              <a href="#clientes" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md">
                Clientes
              </a>
              <a href="#para-quien" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md">
                Para quién
              </a>
              <a href="#contacto" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md">
                Contacto
              </a>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section con Carousel */}
      <section className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                Servicio de mensajería para empresas que quieren crecer
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Ayudamos a <span className="font-semibold text-slate-900">startups y pequeñas empresas</span> a comunicarse mejor con sus clientes mediante soluciones de mensajería rápidas, seguras y escalables.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-slate-700 to-slate-900 text-white hover:from-slate-800 hover:to-slate-950 shadow-lg hover:shadow-xl transition-all"
                  onClick={() => {
                    const element = document.getElementById('contacto');
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Contactanos hoy
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl border-2 border-slate-200">
                {carouselItems.map((item, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${
                      index === currentSlide ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                  {carouselItems.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`h-2 rounded-full transition-all ${
                        index === currentSlide ? 'w-8 bg-white' : 'w-2 bg-white/50'
                      }`}
                      aria-label={`Slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ¿Qué hacemos? */}
      <section id="servicio" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              ¿Qué hacemos?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-slate-700 to-slate-900 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 border-2 border-slate-200 hover:shadow-xl transition-all hover:border-slate-300">
              <div className="bg-gradient-to-br from-slate-100 to-slate-200 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <MessageCircle className="h-8 w-8 text-slate-700" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Implementación y gestión de servicios de mensajería profesional
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Para empresas que no quieren perder tiempo ni recursos en soluciones técnicas complejas.
              </p>
            </Card>
            <Card className="p-8 border-2 border-slate-200 hover:shadow-xl transition-all hover:border-slate-300">
              <div className="bg-gradient-to-br from-slate-100 to-blue-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Code className="h-8 w-8 text-slate-700" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Análisis, desarrollo e implementación
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Nos adaptamos a la realidad de cada país y a las necesidades de tu negocio.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Nuestros Clientes */}
      <section id="clientes" className="py-16 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Nuestros clientes
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-slate-700 to-slate-900 mx-auto rounded-full"></div>
          </div>
          <div className="h-[200px] flex items-center justify-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {clientLogos.slice(0, 4).map((client, index) => (
                <div
                  key={index}
                  className="h-[200px] flex items-center justify-center"
                >
                  <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border border-slate-200 w-full h-full flex flex-col items-center justify-center">
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="max-w-full max-h-20 object-contain filter grayscale hover:grayscale-0 transition-all mb-3"
                    />
                    <p className="text-sm font-medium text-slate-700 text-center mt-2">
                      {client.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ¿Por qué elegirnos? */}
      <section id="por-que" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              ¿Por qué elegirnos?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-slate-700 to-slate-900 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Zap, text: "Implementación rápida" },
              { icon: Globe, text: "Experiencia internacional (radicados en USA)" },
              { icon: Code, text: "Conocimiento técnico profundo" },
              { icon: Users, text: "Trato directo y personalizado" },
              { icon: Rocket, text: "Soluciones pensadas para empresas pequeñas y en crecimiento" },
              { icon: Shield, text: "Seguridad y confiabilidad garantizadas" },
            ].map((item, index) => (
              <Card key={index} className="p-6 border-2 border-slate-200 hover:shadow-xl transition-all hover:border-slate-300">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-slate-100 to-slate-200 p-3 rounded-lg flex-shrink-0">
                    <item.icon className="h-6 w-6 text-slate-700" />
                  </div>
                  <p className="text-slate-700 font-medium pt-1">{item.text}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ¿Para quién es este servicio? */}
      <section id="para-quien" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              ¿Para quién es este servicio?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-slate-700 to-slate-900 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { icon: Rocket, text: "Startups" },
              { icon: Building2, text: "Pequeñas y medianas empresas" },
              { icon: Users, text: "Empresas familiares" },
              { icon: MessageCircle, text: "Negocios que quieren tercerizar la mensajería" },
            ].map((item, index) => (
              <Card key={index} className="p-6 text-center border-2 border-slate-200 hover:shadow-xl transition-all hover:border-slate-300">
                <div className="bg-gradient-to-br from-slate-100 to-slate-200 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-8 w-8 text-slate-700" />
                </div>
                <p className="text-slate-700 font-semibold">{item.text}</p>
              </Card>
            ))}
          </div>
          <Card className="p-6 bg-red-50 border-2 border-red-200">
            <p className="text-center text-slate-700">
              <span className="font-bold text-orange-600">No trabajamos con</span> grandes empresas, corporaciones ni organismos gubernamentales.
            </p>
            <p className="text-center text-slate-700">
              <span className="font-bold text-orange-600">Unicamente trabajamos con</span> startups y pequeñas empresas.
            </p>
          </Card>
        </div>
      </section>

      {/* Tu beneficio */}
      <section className="py-20 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Tu beneficio
            </h2>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed">
              Vos te enfocás en hacer crecer tu negocio.
            </p>
            <p className="text-xl md:text-2xl leading-relaxed">
              Nosotros nos ocupamos de que tus mensajes lleguen <span className="font-bold">bien, rápido y sin complicaciones</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              ¿Listo para empezar?
            </h2>
            <p className="text-xl text-slate-600 mb-8">
              Contactanos hoy y descubrí cómo mejorar la comunicación con tus clientes.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-slate-700 to-slate-900 mx-auto rounded-full"></div>
          </div>
          <Card className="max-w-2xl mx-auto p-8 md:p-12 border-2 border-slate-200 shadow-xl">
            <div className="text-center">
              <div className="bg-gradient-to-br from-slate-100 to-slate-200 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="h-10 w-10 text-slate-700" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Mail
              </h3>
              <a
                href={`mailto:${config.email}`}
                className="text-2xl text-slate-700 hover:text-slate-900 font-semibold inline-flex items-center gap-2 transition-colors"
              >
                {config.email}
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <img
                src={process.env.PUBLIC_URL + utils.getBrandLogo()}
                alt={config.brand}
                className="h-12 w-auto object-contain filter brightness-0 invert"
              />
            </div>
            <p className="text-slate-400 text-sm">
              &copy; {new Date().getFullYear()} {config.brand}. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
