<script>
import OverlayScrollbars from "overlayscrollbars";

export default {
  mounted() {
    let that = this;
    $(".nav-item>.nav-link").click(function() {
      $(".nav-item.has-sub.open")
        .not($(this).closest(".has-sub"))
        .removeClass("open")
        .children(".nav-sub")
        .slideUp();
      if (
        $(this)
          .parent()
          .hasClass("has-sub")
      ) {
        $(this)
          .parent()
          .toggleClass("open")
          .children(".nav-sub")
          .slideToggle();
      } else {
        $(".nav-item>.nav-link.active").removeClass("active");
        $(this)
          .addClass("active")
          .closest(".has-sub")
          .children(".nav-link")
          .addClass("active");
        if (window.innerWidth < 768) {
          that.$parent.sidebarToggled = false;
        }
      }
    });
    OverlayScrollbars(document.querySelector("#app-sidebar-nav"), {
      scrollbars: {
        autoHide: "move",
        visibility: "auto"
      }
    });
  }
};
</script>

<template>
  <aside id="app-sidebar">
    <a href="#/" class="brand-link text-decoration-none">
      <img :src="require('assets/img/logo.jpg')" alt="Logo" />
      <p class="font-weight-bold">Carlos One</p>
    </a>
    <nav id="app-sidebar-nav" class="nav-sidebar">
      <ul class="nav flex-column" role="menu">
        <li class="user-item mb-3">
          <a href="#/" class="user-link text-decoration-none">
            <img :src="require('assets/img/user.jpg')" alt="User" />
            <p>
              Carlos Eduardo Ferrari
              <br />987300362
            </p>
          </a>
        </li>
        <li class="nav-item has-sub open">
          <a href="#/" class="nav-link active">
            <i class="nav-icon fas fa-fw fa-tachometer-alt"></i>
            <p>
              Dashboard
              <i class="right fas fa-fw fa-angle-left"></i>
            </p>
          </a>
          <ul class="nav nav-sub" style="display: block">
            <li class="nav-item">
              <a href="#/" class="nav-link active">
                <i class="far fa-fw fa-circle nav-icon"></i>
                <p>Dashboard v1</p>
              </a>
            </li>
            <li class="nav-item">
              <a href="#/" class="nav-link">
                <i class="far fa-fw fa-circle nav-icon"></i>
                <p>Dashboard v2</p>
              </a>
            </li>
            <li class="nav-item">
              <a href="#/" class="nav-link">
                <i class="far fa-fw fa-circle nav-icon"></i>
                <p>Dashboard v3</p>
              </a>
            </li>
          </ul>
        </li>
        <li class="nav-item">
          <a href="#/" class="nav-link">
            <i class="nav-icon fas fa-fw fa-th"></i>
            <p>
              Widgets
              <span class="right badge badge-danger">New</span>
            </p>
          </a>
        </li>
        <li class="nav-item has-sub">
          <a href="#/" class="nav-link">
            <i class="nav-icon fas fa-fw fa-chart-pie"></i>
            <p>
              Charts
              <i class="right fas fa-fw fa-angle-left"></i>
            </p>
          </a>
          <ul class="nav nav-sub">
            <li class="nav-item">
              <a href="#/" class="nav-link">
                <i class="far fa-fw fa-circle nav-icon"></i>
                <p>ChartJS</p>
              </a>
            </li>
            <li class="nav-item">
              <a href="#/" class="nav-link">
                <i class="far fa-fw fa-circle nav-icon"></i>
                <p>Flot</p>
              </a>
            </li>
            <li class="nav-item">
              <a href="#/" class="nav-link">
                <i class="far fa-fw fa-circle nav-icon"></i>
                <p>Inline</p>
              </a>
            </li>
          </ul>
        </li>
        <li class="nav-item has-sub">
          <a href="#/" class="nav-link">
            <i class="nav-icon fas fa-fw fa-tree"></i>
            <p>
              UI Elements
              <i class="fas fa-fw fa-angle-left right"></i>
            </p>
          </a>
          <ul class="nav nav-sub">
            <li class="nav-item">
              <a href="#/" class="nav-link">
                <i class="far fa-fw fa-circle nav-icon"></i>
                <p>General</p>
              </a>
            </li>
            <li class="nav-item">
              <a href="#/" class="nav-link">
                <i class="far fa-fw fa-circle nav-icon"></i>
                <p>Icons</p>
              </a>
            </li>
            <li class="nav-item">
              <a href="#/" class="nav-link">
                <i class="far fa-fw fa-circle nav-icon"></i>
                <p>Buttons</p>
              </a>
            </li>
            <li class="nav-item">
              <a href="#/" class="nav-link">
                <i class="far fa-fw fa-circle nav-icon"></i>
                <p>Sliders</p>
              </a>
            </li>
          </ul>
        </li>
        <li class="nav-item has-sub">
          <a href="#/" class="nav-link">
            <i class="nav-icon fas fa-fw fa-edit"></i>
            <p>
              Forms
              <i class="fas fa-fw fa-angle-left right"></i>
            </p>
          </a>
          <ul class="nav nav-sub">
            <li class="nav-item">
              <a href="#/" class="nav-link">
                <i class="far fa-fw fa-circle nav-icon"></i>
                <p>General Elements</p>
              </a>
            </li>
            <li class="nav-item">
              <a href="#/" class="nav-link">
                <i class="far fa-fw fa-circle nav-icon"></i>
                <p>Advanced Elements</p>
              </a>
            </li>
            <li class="nav-item">
              <a href="#/" class="nav-link">
                <i class="far fa-fw fa-circle nav-icon"></i>
                <p>Editors</p>
              </a>
            </li>
          </ul>
        </li>
        <li class="nav-item has-sub">
          <a href="#/" class="nav-link">
            <i class="nav-icon fas fa-fw fa-table"></i>
            <p>
              Tables
              <i class="fas fa-fw fa-angle-left right"></i>
            </p>
          </a>
          <ul class="nav nav-sub">
            <li class="nav-item">
              <a href="#/" class="nav-link">
                <i class="far fa-fw fa-circle nav-icon"></i>
                <p>Simple Tables</p>
              </a>
            </li>
            <li class="nav-item">
              <a href="#/" class="nav-link">
                <i class="far fa-fw fa-circle nav-icon"></i>
                <p>Data Tables</p>
              </a>
            </li>
          </ul>
        </li>
        <li class="nav-header">EXAMPLES</li>
        <li class="nav-item">
          <a href="#/" class="nav-link">
            <i class="nav-icon fas fa-fw fa-calendar"></i>
            <p>
              Calendar
              <span class="badge badge-info right">2</span>
            </p>
          </a>
        </li>
        <li class="nav-item has-sub">
          <a href="#/" class="nav-link">
            <i class="nav-icon far fa-fw fa-envelope"></i>
            <p>
              Mailbox
              <i class="fas fa-fw fa-angle-left right"></i>
            </p>
          </a>
          <ul class="nav nav-sub">
            <li class="nav-item">
              <a href="#/" class="nav-link">
                <i class="far fa-fw fa-circle nav-icon"></i>
                <p>Inbox</p>
              </a>
            </li>
            <li class="nav-item">
              <a href="#/" class="nav-link">
                <i class="far fa-fw fa-circle nav-icon"></i>
                <p>Compose</p>
              </a>
            </li>
            <li class="nav-item">
              <a href="#/" class="nav-link">
                <i class="far fa-fw fa-circle nav-icon"></i>
                <p>Read</p>
              </a>
            </li>
          </ul>
        </li>
        <li class="nav-item has-sub">
          <a href="#/" class="nav-link">
            <i class="nav-icon fas fa-fw fa-book"></i>
            <p>
              Pages
              <i class="fas fa-fw fa-angle-left right"></i>
            </p>
          </a>
          <ul class="nav nav-sub">
            <li class="nav-item">
              <a href="#/" class="nav-link">
                <i class="far fa-fw fa-circle nav-icon"></i>
                <p>Invoice</p>
              </a>
            </li>
            <li class="nav-item">
              <a href="#/" class="nav-link">
                <i class="far fa-fw fa-circle nav-icon"></i>
                <p>Profile</p>
              </a>
            </li>
            <li class="nav-item">
              <a href="#/" class="nav-link">
                <i class="far fa-fw fa-circle nav-icon"></i>
                <p>Login</p>
              </a>
            </li>
            <li class="nav-item">
              <a href="#/" class="nav-link">
                <i class="far fa-fw fa-circle nav-icon"></i>
                <p>Register</p>
              </a>
            </li>
            <li class="nav-item">
              <a href="#/" class="nav-link">
                <i class="far fa-fw fa-circle nav-icon"></i>
                <p>Lockscreen</p>
              </a>
            </li>
          </ul>
        </li>
        <li class="nav-item has-sub">
          <a href="#/" class="nav-link">
            <i class="nav-icon far fa-fw fa-plus-square"></i>
            <p>
              Extras
              <i class="fas fa-fw fa-angle-left right"></i>
            </p>
          </a>
          <ul class="nav nav-sub">
            <li class="nav-item">
              <a href="#/" class="nav-link">
                <i class="far fa-fw fa-circle nav-icon"></i>
                <p>Error 404</p>
              </a>
            </li>
            <li class="nav-item">
              <a href="#/" class="nav-link">
                <i class="far fa-fw fa-circle nav-icon"></i>
                <p>Error 500</p>
              </a>
            </li>
            <li class="nav-item">
              <a href="#/" class="nav-link">
                <i class="far fa-fw fa-circle nav-icon"></i>
                <p>Blank Page</p>
              </a>
            </li>
            <li class="nav-item">
              <a href="#/" class="nav-link">
                <i class="far fa-fw fa-circle nav-icon"></i>
                <p>Starter Page</p>
              </a>
            </li>
          </ul>
        </li>
        <li class="nav-header">MISCELLANEOUS</li>
        <li class="nav-item">
          <a href="#/" class="nav-link">
            <i class="nav-icon fas fa-fw fa-file"></i>
            <p>Documentation</p>
          </a>
        </li>
        <li class="nav-header">LABELS</li>
        <li class="nav-item">
          <a href="#/" class="nav-link">
            <i class="nav-icon far fa-fw fa-circle text-danger"></i>
            <p class="text">Important</p>
          </a>
        </li>
        <li class="nav-item">
          <a href="#/" class="nav-link">
            <i class="nav-icon far fa-fw fa-circle text-warning"></i>
            <p>Warning</p>
          </a>
        </li>
        <li class="nav-item">
          <a href="#/" class="nav-link">
            <i class="nav-icon far fa-fw fa-circle text-info"></i>
            <p>Informational</p>
          </a>
        </li>
        <li class="nav-header">&nbsp;</li>
      </ul>
    </nav>
  </aside>
</template>
