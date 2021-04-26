let app = new Vue({
  el: "#app",
  data: {
    name: 'Contatos App',
    contact: {
      id:'',
      name: '',
      email: '',
      phone: ''
    }
  },
  created() {
    this.contacts = JSON.parse(localStorage.getItem('contactsApp'));
  },
  methods: {
    saveContact(contact) {
      let contacts = localStorage.getItem('contactsApp');

      contact.id = new Date().getTime();

      if(contacts) {
        contacts = JSON.parse(contacts);
        contacts.push(contact);
      } else {
        contacts = [contact];
      }
      
      this.contacts = contacts;

      localStorage.setItem('contactsApp', JSON.stringify(contacts))
    },
    removeContact(contactId) {
      let contacts = localStorage.getItem('contactsApp');

      if(!contacts) return;

      contacts = JSON.parse(contacts);

      contacts = contacts.filter((contact) => {
        return contact.id != contactId;
      });

      this.contacts = contacts;

      localStorage.setItem('contactsApp', JSON.stringify(contacts));
    }
  }
});