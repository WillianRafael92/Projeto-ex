<template>
    <div class="m-3">
        <HelloWorld msg="Cadastro de Funcionário"/>
        <div class="card card-body mx-2">
            <form ref="form" >
                <div class="row">
                    <TheInput
                        v-model="newEmployee.name"
                        divClass="col-xs-12 col-sm-12 col-md-8"
                        label="Nome"
                        required
                    />
                    <TheInput
                        v-model="newEmployee.cpf"
                        divClass="col-xs-12 col-sm-12 col-md-4"
                        label="CPF"
                        required
                        v-mask="'###.###.###-##'"
                    />
                </div>
                <div class="row">
                    <TheInput
                        v-model="newEmployee.email"
                        divClass="col-12 col-md-6"
                        label="E-mail"
                        required
                    />
                    <TheInput
                        v-model="newEmployee.phone"
                        divClass="col-12 col-md-6"
                        label="Telefone"
                        v-mask="['(##) ####-####', '(##) # ####-####']"
                        required
                    />
                </div>
                <div class="row"> 
                    <TheInput
                        v-model="newEmployee.birthday"
                        divClass="col-12 col-md-6"
                        label="Data de Nascimento"
                        v-mask="'##/##/####'"
                        required
                    /> 
                    <TheInput
                        v-model="newEmployee.role"
                        divClass="col-12 col-xs-12 col-sm-12 col-md-3 col-xxl-3"
                        label="Cargo"
                        required
                    />                
                </div>
                <div class="row mt-3">
                    <div class="col-md-2 d-flex justify-content-between">
                        <div>
                            <TheButton
                                type="button"
                                label="Salvar"
                                color="primary"
                                icon="check2"
                                @click="addEmployee()"
                            />
                        </div>
                    </div>   
                </div>
            </form>
        </div>
        <div v-if="employees.length" class="card card-body mx-2 mt-4">
            <HelloWorld msg="Lista de Funcionários"/>
            <TheTable
                :headers="headers"
                :employees="employees"                
            >
                <template v-slot:Nome="{employee}"> 
                     {{ employee.name }} 
                </template>
                <template v-slot:E-mail="{employee}">
                    {{ employee.email }}
                </template>
                <template v-slot:Cargo="{employee}">
                    {{ employee.role }}
                </template>
                <template v-slot:Ações="{ employee }">
                    <div class="text-center">
                        <!-- <i
                            class="bi bi-pencil-fill text-secondary px-1"
                            style="cursor: pointer"
                            @click="edit(employee.id)">
                        </i> -->
                        <i
                            class="bi bi-trash-fill text-danger px-1"
                            style="cursor: pointer" @click="
                            removeEmployee(employee)">
                        </i>
                    </div>
                </template>
            </TheTable>
        </div>
    </div>
</template>


  
<script>
    import HelloWorld from '@/components/HelloWorld.vue'
    import TheInput from '@/components/TheInput.vue'
    import TheButton from '@/components/TheButton.vue'
    import TheTable from '@/components/formComponents/TheTable.vue'
  
    export default {

      name: 'HomeView',

      components: {
        HelloWorld,
        TheInput,
        TheButton,
        TheTable
      },

      data(){
        return {
            route: 'employee',
            headers: ['Nome', 'E-mail', 'Cargo', 'Ações'],
            // headers: ['name', 'email', 'role'],
            employees:[],
            newEmployee: {
                name: null,
                email: null,
                cpf: null,
                role: null,
                birthday: null,
                phone: null,
            }
        }
      },
      
      methods: {
        addEmployee: function(){
            if(
                !this.newEmployee.name || !this.newEmployee.email || !this.newEmployee.cpf || 
                !this.newEmployee.phone || !this.newEmployee.birthday || !this.newEmployee.role
            ){
                alert("É nescessario preencher todos os campos!")
            }else{
                this.employees.push(this.newEmployee);
                this.newEmployee = {}, 

                localStorage.setItem("employees", JSON.stringify(this.employees));
            }
            
        },

        removeEmployee(employee){
            if(confirm('Você deseja excluir este funcionário?')){
                const index = this.employees.indexOf(employee);
                if(index !== -1){
                    this.employees.splice(index, 1);
                }
            }
        }
        
      },

      created() {
        this.employees = localStorage.getItem("employees") ? JSON.parse(localStorage.getItem("employees")) : this.employees;
      },

      updated() {
        localStorage.setItem("employees", JSON.stringify(this.employees));
      }
      
    } 
</script>
  