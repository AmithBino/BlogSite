<template>
    <body class="container">
      <h1>Get in Touch</h1>
      <div class="form-contact-container">
      <form accept-charset="UTF-8" >
        <div class="form-fields">
          <label for="message">Message</label>
          <textarea id="message" name="message" required v-model="message"></textarea>
        </div>
        
        <div class="form-fields">
          <label for="name">Name</label>
          <input type="text" id="name" name="name" required v-model="name">
        </div>
  
        <div class="form-fields">
          <label for="email">Email</label>
          <input type="email" id="email" name="email" required v-model="email">
        </div>
        <button type="button" @click="sendMessage">Send Message</button>
      </form>
      <div class="contact-info">
  <div class="info-item">
    <img src="../assets/address.png" alt="Address Icon" class="info-icon">
    <a href="https://www.google.com/maps?q=9.5916,76.5222" target="_blank" class="info-link">Kottayam, Kerala</a>
  </div>
  <div class="info-item">
    <img src="../assets/email.png" alt="Email Icon" class="info-icon">
    <a href="mailto:support@odyssey.com" class="info-link">support@odyssey.com</a>
  </div>
  <div class="info-item">
    <img src="../assets/phone.png" alt="Phone Icon" class="info-icon">
    <a href="tel:+919876543210" class="info-link">+91 9876543210</a>
  </div>
</div>
</div>
    </body>
  </template>

<script>
export default {
  name: 'FormPage',
  data() {
    return {
      message: '',
      name: '',
      email: ''
    };
  },
  methods:{
    sendMessage(){
      console.log('Message:', this.message);
      console.log('Name:', this.name);
      console.log('Email:', this.email);
    }
  }
}
</script>

  
  <style scoped>
.container {
  max-width: 800px; 
  margin: 0 auto;
  padding: 20px;
}
    h1 {
      font-size: 1.8rem;
      font-weight: bold;
      margin-bottom: 1rem;
      text-align: left;
      padding-left: 90px;
    }
    .form-fields {
      margin-bottom: 1rem;
    }
    label { 
      display: block; 
      margin-bottom: 4px; 
      font-weight: bold; 
      font-size: 0.9rem;
      text-align: left;
      padding-left: 10px;
      color: #071952;
    }
    input[type="text"], input[type="email"]{
      border: 1px solid #ccc;
      font-size: 1rem;
      padding: 6px 20px;
      border-radius: 6px;
      width: 300px;
    }

    textarea{
        border: 1px solid #ccc;
      font-size: 1rem;
      padding: 6px 20px;
      border-radius: 6px;
      height: 100px;
      width: 300px;
    }
    body { display: block }
    button[type="button"] { 
      /* background-color: #2F58CD; */
      background-image: linear-gradient(to right, #3A1078, #2F58CD);
      color: white;
      font-size: 0.8rem;
      border: none;
      border-radius: 4px;
      padding: 8px 12px;
      font-weight: 500;
      cursor: pointer; 
    }
    button[type="button"]:hover {
      background-image: linear-gradient(to right, #2F58CD, #3A1078); 
      color: white; 
    }

    .form-contact-container {
  display: flex;
  /* flex-direction: row; */
  justify-content: space-between;
  align-items: flex-start;
  gap: 40px; 
}

.contact-info {
  display: flex;
  flex-direction: column;
  /* align-items: flex-end;  */
  gap: 30px;
  margin-right: 100px;
}


.contact-info .info-item {
  display:flex;
  align-items: center;
  font-size: 1rem;
  color: #071952;

}

.contact-info .info-icon {
  width: 30px;
  height: 30px;
  margin-right: -60px;
  margin-top: -10px;
}

.info-link {
  color: inherit;
  text-decoration: none; 
  cursor: pointer; 
}
</style>


  