import { StyleSheet } from "react-native";

export const registroStyles = StyleSheet.create({
  icon: {
    marginBottom: 6,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
  },
  passwordIcon: {
    marginLeft:170,
    marginTop:-22,

    width: 500,
    height: 500,
    
    position: 'absolute',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    opacity: 0.9,
  },
  container2: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eae9e9d5',
    width: 280,
    height: 550,
    borderRadius:10,
    opacity: 0.9,
    borderWidth:1,
    borderColor:'#8b8a8a'
  },
  label: {
    fontSize: 19,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#474747',
  },
  label2: {
    fontSize: 15,
    marginTop: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 5,
    paddingHorizontal: 10,
    width: '80%',
    backgroundColor: 'white',
  },
  link: {
    color: 'blue',
    marginTop: 15,
    textDecorationLine: 'underline',
  },
});

export const loginStyles = StyleSheet.create({
  icon: {
    marginBottom: 20,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    opacity: 0.9,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
  },
  container2: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eae9e9d5',
    width: 280,
    height: 550,
    borderRadius:10,
    opacity: 0.9,
    borderWidth:1,
    borderColor:'#8b8a8a'
  },
  label: {
    fontSize: 19,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#474747',
  },
  label2: {
    fontSize: 20,
    marginTop: 10,
    color: 'white',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
    width: '80%',
    backgroundColor: 'white',
  },
  link: {
    color: 'blue',
    marginTop: 15,
    textDecorationLine: 'underline',
  },
});

export const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#555',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#3498db',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export const appStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a7d9f3',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  texto: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  encabezado: {
    flex: 1.5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#227edb',
  },
  cuerpo: {
    flex: 8,
  },
  pie: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#227edb',
  },
});

export const productostyles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
  },
  card: {
  },
  imageContainer: {
    alignItems: 'center', // Centra horizontalmente
  },
  image: {
    height: 400,
    width: '100%',
  },
});

export const preguntasFstyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  faqItem: {
    marginBottom: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
  },
  question: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
  },
  answer: {
    fontSize: 16,
    marginTop: 10,
  },
});

export const contactostyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
    color: '#555',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 10,
  },
  button: {
    backgroundColor: '#3498db',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});


export const Quienesstyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    
  },
  description: {
    fontSize: 16,
    marginBottom: 15,
    textAlign: 'center',
    color: '#555',
  },
  item: {
    alignItems: 'center',
    marginRight: 15,
  },
  itemImage: {
    width: 310, 
    height: 310, 
    borderRadius: 8,
  },
  itemTitle: {
    fontSize: 14,
    textAlign: 'center',
  },
});


export const Politicasstyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  policyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  policyText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'blue',
    marginTop: 15,
    textDecorationLine: 'underline',
  },
  modalView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
   
  },
  modalText: {
    fontSize: 16,
    marginBottom: 5,
    textAlign: 'center',
    color: '#333',
  },
  modalTittle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});