### SHOPPING CART

Para obtener el carrito de compras de un usuario hacer una petición a la siguiente URL:

```GET
http://localhost:NUM_PUERTO/api/v1/shoppingCart
```

Nota: Al hacer la petición debe enviarse el token del usuario autenticado para saber de quién es el carrito de compras. La petición tendrá la siguiente estructura:

```JS
axios.get("http://localhost:NUM_PUERTO/api/v1/shoppingCart",{
	headers:{
		"x-token": TOKEN_DEL_USUARIO
	}
})
```

La respuesta será un array de productos con el siguiente formato:

```JSON
{
	quantity: CANTIDAD_A_COMPRAR,
	currency_id: MONEDA,
	description: DESCRIPCION_DEL_PRODUCTO,
	picture_url: IMAGEN_DEL_PRODUCTO,
	title: NOMBRE_DEL_PRODUCTO,
	unit_price: PRECIO_DEL_PRODUCTO,
	id: ID_DEL_PRODUCTO,
}
```

Nota: Guardar el carrito tambien en el localStorage

Cuando se agregue un nuevo producto en el carrito hacer una petición a la siguiente URL con el carrito actualizado con dicho producto:

```JS
axios.post(
	"http://localhost:NUMERO_PUERTO/api/v1/shoppingCart",
	{
	  items: ARRAY_CARRITO
	},
	{
	  headers:
	  {
		"x-token": TOKEN_DEL_USUARIO
	   }
	 }
	)
```

Hacer lo mismo cada que se suma añada o elimine un producto del carrito de compras, esto hará que el carrito de compras este sincronizado con la base de datos...
Seguir el mismo modelo de estructura del JSON antes mencionado.

Para obtener el token de autenticación es necesario que el usuario este registrado, si aún no esta implementado esa funcionalidad, pueden usar un software para el testeo de APIS (Postman,Insomnia,Thunder,Bruno,etc) y registrar al usuario apuntando a la siguiente URL:

```
http://localhost:NUMERO_PUERTO/api/v1/users/register
```

La estructura de datos del usuario será la siguiente:

```JSON
{
  "name": "Cristhian Rodríguez",
  "mail": "crisrodam1996@gmail.com",
  "password": "a12b32*",
  "phone": "0981135286"
}
```

Pueden sustituirlo con sus datos de preferencia

Una vez registrado pueden loguearse al siguiente ENDPOINT

```
http://localhost:NUMERO_PUERTO/api/v1/auth/login
```

Y se debe enviar por body el mail y la password, esto devolverá una respuesta, tomaremos el valor de`"x-token"`.

Ese valor reemplazenlo en los ENDPOINTS de ShoppingCart.

---

Si tienen un modelo de login implementado, al recibir respuesta del servidor se pueden guardar el token en el localStorage o en una cookie y tomarla de ahí cuando lo necesiten, sino pues pueden pegar el valor del token directamente donde se lo esta requeriendo

---

### RUTAS POR MODELOS

#### /users

- POST `/users/register` (name,mail,phone,password)
- PUT `/users/update` => Token y data a editar obligatoria
- GET `/users/list` => Solo para admins, token obligatorio
