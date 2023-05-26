<template>
    <nav class="navbar navbar-expand-lg text-bg-dark d-flex">
        <i class="bi bi-list icon_action ps-3" @click="toggleSidebar"></i>
    </nav>    

    <div class="wrapper">
        <nav ref="sidebar" class="sidebar text-bg-dark">
            <TheSideMenu :menuList="menuList" class="px-3"/>
            <!-- <div class="sidebarBottom text-center">
                <TheButton
                    type="button"
                    label="Sair"
                    color="danger"
                    icon="bi bi-box-arrow-in-right me-2"
                />
            </div> -->
        </nav>

        <div id="content" class="content text-bg-light p-0">
            <router-view/>
        </div>
    </div>
</template>

<script>
    import {ref} from 'vue'
    import TheSideMenu from '@/components/general/TheSideMenu.vue'
    // import TheButton from '@/components/TheButton.vue'
    export default{
        setup() {
            const sidebar = ref(null);

            const toggleSidebar = () => {
                sidebar.value.classList.toggle('active');
            }

            return { sidebar , toggleSidebar}
        },

        components: {
            TheSideMenu, 
            // TheButton
        }, 

        data: () => ({
            menuList: [
                {
                    code: 'dashboard',
                    title: 'Dashboard',
                    staus: false,
                    icon: 'bi bi-pie-chart-fill',
                    children:[]
                },
                {
                    code: null,
                    title: 'Relatorios',
                    status: false,
                    icon: 'bi bi-file-earmark-text-fill',
                    children: []
                },
                {
                    code: null,
                    title: 'Cadastros',
                    status: false,
                    icon: 'bi bi-pencil-square',
                    children: [
                        {
                            code: 'employee',
                            title: 'Funcionários',
                            status: false,
                            icon: 'bi-person-fill',
                            children: [],
                        }
                    ]
                }
            ]
        })
    }
</script>

<style>
    .wrapper{
        display: flex;
        width: 100%;
        height: 100%;
        align-items: stretch;
    }

    .sidebar{
        min-width: 250px;
        max-width: 250px;
        transition: all 0.3s;
        position: relative;
    }

    .sidebar .sidebarBottom{
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        padding: 10px;
    }

    .sidebar.active{
        margin-left: -250px;
    }

    .content {
        width: 100%;
        height: 100%;
        min-height: 95vh;
        transition: all 0.3s;
    }

    .navbar {
        height: 5vh;
    }

    .item-firstLevel:hover{
        color: #000;
        background-color: #8dc4f1;
    }

    .btn-toggle-nav a:hover,
    .btn-toggle-nav a:focus {
        background-color: #acacac;
    }

    .btn-toggle::after {
        width: 1.25em;
        line-height: 0;
        content: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='rgba%280,0,0,.5%29' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M5 14l6-6-6-6'/%3e%3c/svg%3e");
        transition: transform .35 ease;
        transform-origin: 0.5em 50%;
    }

    .btn-toggle[aria-expanded="true"]::after {
        transform: rotate(450deg);
    }

    @media (max-width: 768px) {
        .sidebar {
            margin-left: -250px;
        }

        .sidebar.active {
            margin-left: 0;
        }

        .sidebarCollapse span {
            display: none;
        }
    }

    @media screen and (width < 1550px) {
        .content {
            min-height: 90vh;
        }

        .navbar {
            height: 10vh;
        }
    }

</style>
