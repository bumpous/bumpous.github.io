<template>
  <div id="formarea">
    <b-row>
      <b-col md="6">
        <b-form-group id="namegroup" label="Name" label-for="namefield">
          <b-form-input id="namefield" v-model="name" type="text" placeholder="Your name"></b-form-input>
        </b-form-group>
        <b-form-group id="titlegroup" label="Title" label-for="titlefield">
          <b-form-input 
            required id="titlefield" 
            v-model="title" type="text" 
            placeholder="Your title" 
            ></b-form-input>
        </b-form-group>
        <b-form-group id="deptgroup" label="Department" label-for="deptfield">
          <b-form-select required id="deptfield" v-model="dept" type="text" :options="departments"></b-form-select>
        </b-form-group>
        <b-form-group id="phonegroup" label="Office Phone" label-for="phonefield">
          <b-form-input id="phonefield" v-model="phone" maxlength="12" type="tel" :placeholder="pphone" :formatter="phoneformat"></b-form-input>
        </b-form-group>
        <b-form-group id="emailgroup" label="Email Address" label-for="emailfield">
          <b-form-input id="emailfield" v-model="email" type="email" placeholder="Your email address" :formatter="emailformat"></b-form-input>
        </b-form-group>
      </b-col>
      <b-col md="6">
        <h6>Signature Preview</h6>
        <b-card id="preview">
          <!-- <SigTemplate :sig-name="name" :sig-title="title" :sig-dept="dept" :sig-phone="phone" :sig-email="email"/> -->
          <div id="signature-template">
            <div style="color:#000000; font-size: 12px;">
              <p style="color: #990033; font-size: 14px; line-height: 1;"><span style="font-family: Arial, Helvetica, sans-serif;"><strong>{{ dname }}</strong></span></p> 
              <p style="margin-top: 0.5em; margin-bottom: 0.5em; line-height: 1;"><span style="font-family: Arial, Helvetica, sans-serif;"><italic>{{ dtitle }}</italic></span></p>
              <p style="margin-top: 0.5em; margin-bottom: 0.5em; line-height: 1;"><strong style="font-family: Arial, Helvetica, sans-serif;"><div v-show='ddept=="Department Name"'> </div>{{ ddept }}</strong></p>
              <p style="margin-top: 0.5em; margin-bottom: 0.5em; line-height: 1;"><span style="font-family: Arial, Helvetica, sans-serif;">NORTHERN STATE UNIVERSITY</span></p>
              <p style="margin-top: 0.5em; margin-bottom: 0.5em; line-height: 1;"><span style="font-family: Arial, Helvetica, sans-serif;">1200 S. JAY ST., ABERDEEN, SD 57401</span></p>
              <p style="margin-top: 0.5em; margin-bottom: 0.5em; line-height: 1;"><span style="font-family: Arial, Helvetica, sans-serif;">{{ dphone }} | <a :href="'mailto:'+ email" style="color: #990033;">{{ demail }}</a></span></p>
              <p style="margin-top: 1.5em; line-height: 1;"><a href="https://www.northern.edu/"><img src="@/assets/nsu-logo.png" width="100" height="83" style="height: 83px; width: 100px;" alt="Northern State University"></a></p>
              <p>
                <a href="https://www.facebook.com/SouthDakotaMines/"><img src="@/assets/social/nsu-social-fb.png" width="24" height="24" style="margin-right: 2px" alt="Northern State University on Facebook"></a>
                <a href="https://www.instagram.com/southdakotamines/"><img src="@/assets/social/nsu-social-ig.png"  width="24" height="24"  style="margin-right: 2px" alt="Northern State University on Instagram"></a>
                <a href="https://twitter.com/sdsmt"><img src="@/assets/social/nsu-social-xt.png"  width="24" height="24" style="margin-right: 2px"  alt="Northern State University on X"></a>
                <a href="https://www.snapchat.com/add/sdsmt"><img src="@/assets/social/nsu-social-sc.png"  width="24" height="24" style="margin-right: 2px"  alt="Northern State University on Snapchat"></a>
              </p>
            </div>
          </div>
        </b-card>
        <b-button block size="sm" variant="secondary" @click="onClick">Copy Signature</b-button>
      </b-col>
    </b-row>
    <b-toast id="confirm-copy" variant="dark" title="Signature Copied!" auto-hide>The signature preview has been copied to the clipboard. Follow the instructions below to paste it in your email client.</b-toast>  
  </div>
</template>

<script>
export default {
  name: "SignatureForm",
  props: [
  ],
  data() {
    return{
      pname: 'Your Name',
      ptitle: 'Your Title',
      pdept: 'Your Department',
      pphone: 'xxx.xxx.xxxx',
      pemail: 'Your email address',
      
      name: '',
      title: '',
      dept: null,
      phone: '',
      email: '',
      
      signature: {},
      
      darkmode: false,
      
      departments: [
        {value: null, text:'-- Select Department --'},
        
        'Academic Affairs',
        'Advising Center',
        'Admissions',
        'Alumni and Foundation Office',
        'American Indian Circle Program',
        'Athletics',
        'Beulah Williams Library',
        'Campus Security',
        'Career Services',
        'Center for Excellence in Teaching and Learning',
        'College of Arts and Sciences',
        'Communications and Marketing',
        'Counseling Services',
        'Dining Services',
        'E-learning Center',
        'Empowering Innovators',
        'Facilities Management',
        'Finance and Administration',
        'Finance Office',
        'Financial Aid',
        'Graduate Studies',
        'Grants and Sponsored Research',
        'Human Resources',
        'Institutional Research and Assessment',
        'International Programs',
        'Millicent Atkins School of Education',
        'Northern Academy',
        'Northern Startup and Innovation Center',
        'Office of the President',
        'Online and Continuing Education',
        'Print Shop',
        'Purchasing',
        'Registrar',
        'Residence Life',
        'Rising Scholars',
        'School of Business',
        'School of Fine Arts',
        'Student Accessibility Services',
        'Student Affairs',
        'Student Involvement and Leadership',
        'Student Success Center',
        'Technology Services',
        'TRIO Student Support Services',
        'TRIO Upward Bound',
        'Tutoring Services',
        'Wolfe Shoppe',

      ]
    }
  },
  computed:{
    dname: function() { return this.name ? this.name : this.pname },
    dtitle: function() { return this.title ? this.title : this.ptitle },
    ddept: function() { return this.dept ? this.dept : this.pdept },
    dphone: function() { return this.phone ? this.phone : this.pphone },
    demail: function() { return this.email ? this.email : this.pemail },
  },
  filters:{
  },
  methods: { 
    
    caps(val){
      val = val.toString()
      return val.toUpperCase()
    },
    
    emailformat(value){
      value = value.toString()
      return value.replace(/^\w/, this.caps).replace(/\.\w/, this.caps)
    },
    
    phoneformat(value){
      value = value.toString()
      return value.replace(/\D/g,'').replace(/(\d{3})(\d)/,'$1.$2').replace(/(\d{3}.)(\d{3})(\d)/,'$1$2.$3')
    },
    
    onClick() {
      this.$nextTick (() => {
        let el = document.getElementById('signature-template')
        document.getSelection().selectAllChildren(el)
        document.execCommand("copy")
        this.$bvToast.show('confirm-copy')
    })
  },
  
  toggledark(){
    this.darkmode = !this.darkmode
    return (this.darkmode ? 'bg-dark' : 'bg-white')
    }
    
  },
}
</script>

<style lang="scss">
  .social{
    float: left;
    height: 24px;
    padding-right: 6px;
  }
</style>