        var cx = new Windows.Networking.Connectivity.NetworkInformation.getInternetConnectionProfile();

        if ((!('getNetworkConnectivityLevel' in cx)) || ((cx.getNetworkConnectivityLevel()) < 3)) {
            alert('Debes estar conectado a internet para ver el contenido. Revisa tu conexi�n y vuelve a intentar.', 'Atenci�n');
            return false;
        }