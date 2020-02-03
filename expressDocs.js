// EXPRESSJS or Express
/*Express.Js is a web application framework that provides you with a simple
API to build websites, web apps and back ends. With ExpressJS, you need not worry about low level
protocols, processes, etc. */ 


// What is an API? (Application Programming Interface)
/*API is the acronym for Application Programming Interface, which is a software intermediary that
allows two applications to talk to each other. Each time you use an app like Facebook, send an
instant message, or check the weather on your phone, you’re using an API.*/ 


// REST API
/*Representational state transfer (REST) is a software architectural style that defines a set of
constraints to be used for creating Web Service. Web services that conform to the REST architectural
style, called RESTful Web services, provide interoperability between computer systems on the Internet.
RESTful Web services allow the requesting systems to access and manipulate textual representations of
Web resources by using a uniform and predefined set of stateless operations. Other kinds of Web services,
such as SOAP Web services, expose their own arbitrary sets of operations.*/

/*Representional state transfer: It is an architectural style as well as an approach for communications
purpose that is often used in various web services development.
It is often regarded as the "language of the internet"
It is a stateless client and server model */ 

/* Features of REST API:
* Simpler tha SOAP
* Documentation
* Error messages */

/* Principles of REST API:
* Stateless Client Server 
* Client Server
* Uniform Interface
* Cacheable
* Layered System
* Code on Demand 
 */

/*When the requests are sent from the client to the server it contains all the
information that is required to make the so understand it to it can be a part of a URL or query string
parameters body or even hearders now the URL is basically used for uniquely i didn't find that the
source and the body holds the state of the requesting resource once the procesing is done by the server
an appropriate response is sent back to decline through header status or response what coming to
client/server when i said client-server what i mean by that to start you know it has a uniform interface
that separates the client from the server's so separating the concerns basically helps in improving
the users interface portability across multiple platforms as well as enhance the scability of the server
components coming to uniforms interface to obtain the uniformity to the application rest has defined for
interface constraints whicha are resource identification the source manipulation using representations
self descriptive message and hypermedia as the engine of the application state coming to cacheable in
order to provide a better performance the applications are often made as cacheable it is done by labeling
the response from the server as cashable or non cashable either implicitly or explicity if the response
is defined as cashable then the client cache you can reuse to the spawns data for equivalent responses in
the future it also helps in preventing the reuse of steal data next moving forward with layered systems.
layered system architecture allows an application to be more stable by limiting the component behavior
this architecuture enables load benching and provides shared caches for promoting scalability the layered
architecture also helps in enhancing the applications security as components in each layer cannot interact
beyond the next immediate layer they are and finally coming to code on demand the core on demand is on
optional constant and is used the least it permits a client score or app list to be downloaded and
extended wire the interface to be used within the application in essence is simplifies the clients by
creating a smart application which doesn't rely on its own code structure so now that you know the
principles behind the REST API next let's take a look at the methods of the best api now all of you might
be  */ 


//  Methods of the REST API
// CRUD Resource
// CRUD = Create Read Update and Delete

// C > Create > Post
// R > Read > Get
// U > Update > Put
// D > Delete  > Delete

// HTTP METHODS 
// Post, Get, Put and Delete

// How to implement REST API ?


// Schemes 
// Schemes define the structure of our data objects

// {name: String,
// rank: String,
// availability: Boolean
// }

// Middleware or Midddleware function are the functions that have access to the request object (req),
// response object (res), and the next middleware function in the application's request-response cycle.
// The next middleware function is commonly denoted by a variable named next.

// 	Middleware is computer software that provides services to software applications beyond those
// available from the operating system. It can be described as software glue.

// Middleware makes it easier for software developers to implement communication and input/putput, so
// they can focus on the specific purpose of their application.

// Middleware is  a general term for software that serves to glue together seprate, often complex and
// already existing, programs. Some software components that are frequently connected with middleware
// include enterprise applications and Web services.

// Software that provide a link between seprate software applications.
// Middleware is sometimes called plumbing because it connects two applications and passes data
// between them. Middleware allows data contained in one database to be accessed through another.
// This defination would fit enterprise application intergration and data intergration software.

// objectsWeb defines middleware as: The software layer that lies between the operating system and
// applictions on each side of a distributed computing system in a network.

// Middleware services provide a more functional set of application programming interfaces to allow an
// application to:

// 1. Locate transparently across the network, thus providing interaction with another service or
// application.

// 2. Filter data to make them friendly usable or public via anonymization process for privacy
// protection (for example).

// 3. Be independent from network services.

// 4. Be reliable and always available.

// 5. Add complementary attributes like semantics.
// When compared to the operating system and network services.



// Middleware functions can performs the following tasks:
// 1. Execute any code.
// 2. Make changes to the request and the response objects.
// 3. End the request-response cycle.
// 4. Call the next middleware function in the stack

// An Express application can use the following types of middleware:
// Application-level middleware
// Router-level middleware
// Error-handling middleware
// Built-in middleware
// Third-party middleware
