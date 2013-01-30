        var cx = new Windows.Networking.Connectivity.NetworkInformation.getInternetConnectionProfile();

        if ((!('getNetworkConnectivityLevel' in cx)) || ((cx.getNetworkConnectivityLevel()) < 3)) {
            alert('Debes estar conectado a internet para ver el contenido. Revisa tu conexión y vuelve a intentar.', 'Atención');
            return false;
        }