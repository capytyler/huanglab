const persons = [
    {
      name: "Professor Yu HUANG",
      photo: "/team_photos/HuangYu.jpg",
      title: "	Principal Investigator",
      bio:
        "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet architecto ea blanditiis quo labore esse magnam illum ut quibusdam. Corrupti ratione iure aliquam adipisci! Harum vitae laboriosam temporibus illo suscipit?</p><p>Saepe repudiandae rerum quam ut perferendis, ullam similique nemo quod, assumenda mollitia consectetur. Eveniet optio maxime perferendis odit possimus? Facilis architecto nesciunt doloribus consectetur culpa veritatis accusamus expedita quos voluptate!</p><p>Nisi provident minus possimus optio voluptate rem, perspiciatis, placeat, culpa aperiam quod temporibus.</p>",
      
    },
    {
      name: "Dr Li WANG",
      photo: "/team_photos/wangli.jpg",
      title: "Collaborator,Assistant Professor, Department of Biomedical Sciences, City University of Hong Kong",
      bio:
        "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet architecto ea blanditiis quo labore esse magnam illum ut quibusdam. Corrupti ratione iure aliquam adipisci! Harum vitae laboriosam temporibus illo suscipit?</p><p>Saepe repudiandae rerum quam ut perferendis, ullam similique nemo quod, assumenda mollitia consectetur. Eveniet optio maxime perferendis odit possimus? Facilis architecto nesciunt doloribus consectetur culpa veritatis accusamus expedita quos voluptate!</p><p>Nisi provident minus possimus optio voluptate rem, perspiciatis, placeat, culpa aperiam quod temporibus.</p><a href='https://www.cuhk.edu.hk/proj/HuangLab/WangL.html'>SCI-indexed publications</a>",
      social: {
        facebook: "#",
        twitter: "https://twitter.com/knyttneve",
        linkedin: "#"
      }
    },
    {
      name: "Dr. Yuhong HUANG",
      photo: "/team_photos/YuhongHuang.jpg",
      title: "Postdoctoral Fellow",
      bio:
        "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet architecto ea blanditiis quo labore esse magnam illum ut quibusdam. Corrupti ratione iure aliquam adipisci! Harum vitae laboriosam temporibus illo suscipit?</p><p>Saepe repudiandae rerum quam ut perferendis, ullam similique nemo quod, assumenda mollitia consectetur. Eveniet optio maxime perferendis odit possimus? Facilis architecto nesciunt doloribus consectetur culpa veritatis accusamus expedita quos voluptate!</p><p>Nisi provident minus possimus optio voluptate rem, perspiciatis, placeat, culpa aperiam quod temporibus.</p><a href='https://www.cuhk.edu.hk/proj/HuangLab/Yuhong%20Huang.html'>SCI-indexed publications</a>",
      social: {
        facebook: "#",
        twitter: "https://twitter.com/knyttneve",
        linkedin: "#"
      }
    },
    {
      name: "Dr. Chak Kwong CHENG  Andy",
      photo: "/team_photos/280816_Andy.jpg",
      title: "Postdoctoral Fellow",
      bio:
      "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet architecto ea blanditiis quo labore esse magnam illum ut quibusdam. Corrupti ratione iure aliquam adipisci! Harum vitae laboriosam temporibus illo suscipit?</p><p>Saepe repudiandae rerum quam ut perferendis, ullam similique nemo quod, assumenda mollitia consectetur. Eveniet optio maxime perferendis odit possimus? Facilis architecto nesciunt doloribus consectetur culpa veritatis accusamus expedita quos voluptate!</p><p>Nisi provident minus possimus optio voluptate rem, perspiciatis, placeat, culpa aperiam quod temporibus.</p><a href='https://www.cuhk.edu.hk/proj/HuangLab/Andy%20CHENG.html'>SCI-indexed publications</a>",
      social: {
        facebook: "#",
        twitter: "https://twitter.com/knyttneve",
        linkedin: "#"
      }
    },
    {
      name: "Dr. Lijing KANG",
      photo: "/team_photos/02Mar21-KANGLijing.jpg",
      title: "Postdoctoral Fellow",
      bio:
      "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet architecto ea blanditiis quo labore esse magnam illum ut quibusdam. Corrupti ratione iure aliquam adipisci! Harum vitae laboriosam temporibus illo suscipit?</p><p>Saepe repudiandae rerum quam ut perferendis, ullam similique nemo quod, assumenda mollitia consectetur. Eveniet optio maxime perferendis odit possimus? Facilis architecto nesciunt doloribus consectetur culpa veritatis accusamus expedita quos voluptate!</p><p>Nisi provident minus possimus optio voluptate rem, perspiciatis, placeat, culpa aperiam quod temporibus.</p><a href='https://www.cuhk.edu.hk/proj/HuangLab/Kang%20Lijing.html'>SCI-indexed publications</a>",
      social: {
        facebook: "#",
        twitter: "https://twitter.com/knyttneve",
        linkedin: "#"
      }
    }
  ];
  
  const app = new Vue({
    el: "#app",
    data() {
      return {
        persons: persons,
        selectedPersonIndex: null,
        isSelected: false,
        selectedPerson: null,
        inlineStyles: null,
        isReady: false,
        isOk: false,
        selectedPersonData: {
          name: null,
          title: null,
          photo: null,
          social: {
            facebook: null,
            twitter: null,
            linkedin: null
          }
        }
      };
    },
    methods: {
      selectPerson(index, el) {
        if (!this.isOk) {
          this.selectedPersonIndex = index;
          this.isSelected = true;
          el.target.parentElement.className == "person-details"
            ? (this.selectedPerson = el.target.parentElement.parentElement)
            : (this.selectedPerson = el.target.parentElement);
  
          this.selectedPerson.classList.add("person-selected");
          this.selectedPerson.setAttribute(
            "style",
            `width:${this.selectedPerson.offsetWidth}px;`
          );
          this.selectedPersonData = this.persons[index];
          window.setTimeout(() => {
            this.inlineStyles = `width:${this.selectedPerson
              .offsetWidth}px;height:${this.selectedPerson
              .offsetHeight}px;left:${this.selectedPerson.offsetLeft}px;top:${this
              .selectedPerson.offsetTop}px;position:fixed`;
            this.selectedPerson.setAttribute("style", this.inlineStyles);
          }, 400);
          window.setTimeout(() => {
            this.isReady = true;
            this.isOk = true;
          }, 420);
        } else {
          this.reset();
        }
      },
      reset() {
        this.isReady = false;
        window.setTimeout(() => {
          this.selectedPerson.classList.add("person-back");
        }, 280);
        window.setTimeout(() => {
          this.selectedPerson.setAttribute("style", "");
        }, 340);
        window.setTimeout(() => {
          this.isSelected = false;
          this.selectedPerson.classList.remove("person-back", "person-selected");
          this.isOk = false;
        }, 400);
      }
    }
  });
  