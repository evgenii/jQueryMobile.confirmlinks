# JQMobile LinksConfirm
## Include
Add <script src="./jquery.mobile.confirmlinks.min.js"></script> to head of you page.
## Use
### html
Only add 'data-confirm' parametr to you link
    ...
      <div>
        <a href="#withConfirm" data-confirm="Are you sure?" data-rel="dialog" data-transition="pop" data-role="button" data-icon="ok">This link should be with confirmation</a>
      </div>
    ...
### Rails
Also :confirm => 'Are you sure?' - works to
    ...
      <%= link_to( "withConfirm", "#withConfirm", :confirm => "Are you sure?" ) %>
    ...

