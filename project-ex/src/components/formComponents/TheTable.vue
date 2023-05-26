<template>
    <!-- <div>
        <table class="table table-striped table-hover table-bordered table-sm">
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>E-mail</th>
                    <th>Cargo</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Teste</td>
                    <td>teste@email.com</td>
                    <td>CEO</td>
                </tr>
                <tr>
                    <td>Teste</td>
                    <td>teste@email.com</td>
                    <td>CEO</td>
                </tr>
                <tr>
                    <td>Teste</td>
                    <td>teste@email.com</td>
                    <td>CEO</td>
                </tr>
            </tbody>
        </table>
    </div> -->

    <div>
        <table class="table table-striped table-hover table-bordered table-sm">
            <thead>
                <tr>
                    <th v-for="header in headers" :key="header" :class="{'col-md-1': header === 'Ações'}">{{ header }}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(employee, index) in employees" :key="index">
                    <td v-for="header in headers" :key="header" class="align-middle">
                        <slot :name="header" :employee="employee">{{ employee[header] }}</slot>
                        <!-- {{ employee[header.toLowerCase()] }} -->
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

</template>

<script>
    export default{

        props: {
            headers: {type: Array, reuired: true},
            employees: {type: Array, reuired: true},
        }
    }
</script>