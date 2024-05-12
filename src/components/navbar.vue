<template>
    <nav class="navbar navbar-expand-md p-0 py-2">
        <div class="container-fluid">
            <img src="/images/pokemon.png" alt="pokemon-icon" class="img-fluid" style="width: 180px;" >
            <button type="button" class="navbar-toggler" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="offcanvas offcanvas-end" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title fs-2" id="offcanvasNavbarLabel">Menu</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <ul class="p-3 navbar-nav me-auto d-flex justify-content-end gap-2 w-100" >
                  
                </ul>
            </div>
        </div>
    </nav>
    <div class="container">
        <slot></slot>
    </div>
</template>