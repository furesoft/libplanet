#nullable disable
using System;
using System.Collections.Generic;
using System.Net;
using Libplanet.Crypto;
using Libplanet.Net.Transports;
using NetMQ;
using Serilog;
using Xunit;
using Xunit.Abstractions;

namespace Libplanet.Net.Tests.Transports
{
    [Collection("NetMQConfiguration")]
    public class NetMQTransportTest : TransportTest, IDisposable
    {
        private bool _disposed;

        public NetMQTransportTest(ITestOutputHelper testOutputHelper)
        {
            TransportConstructor = (
                    privateKey,
                    appProtocolVersionOptions,
                    host,
                    listenPort,
                    iceServers,
                    messageTimestampBuffer) =>
                CreateNetMQTransport(
                    privateKey,
                    appProtocolVersionOptions,
                    host,
                    listenPort,
                    iceServers,
                    messageTimestampBuffer);

            const string outputTemplate =
                "{Timestamp:HH:mm:ss:ffffff}[{ThreadId}] - {Message}";
            Log.Logger = new LoggerConfiguration()
                .MinimumLevel.Verbose()
                .Enrich.WithThreadId()
                .WriteTo.TestOutput(testOutputHelper, outputTemplate: outputTemplate)
                .CreateLogger()
                .ForContext<NetMQTransportTest>();
            Logger = Log.ForContext<NetMQTransportTest>();
        }

        ~NetMQTransportTest()
        {
            Dispose(false);
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }

        protected void Dispose(bool disposing)
        {
            if (!_disposed)
            {
                if (disposing)
                {
                    NetMQConfig.Cleanup(false);
                }

                _disposed = true;
            }
        }

        private NetMQTransport CreateNetMQTransport(
            PrivateKey privateKey,
            AppProtocolVersionOptions appProtocolVersionOptions,
            string host,
            int? listenPort,
            IEnumerable<IceServer> iceServers,
            TimeSpan? messageTimestampBuffer
        )
        {
            privateKey = privateKey ?? new PrivateKey();
            host = host ?? IPAddress.Loopback.ToString();
            iceServers = iceServers ?? new List<IceServer>();

            return NetMQTransport.Create(
                privateKey,
                appProtocolVersionOptions,
                host,
                listenPort,
                iceServers,
                messageTimestampBuffer).ConfigureAwait(false).GetAwaiter().GetResult();
        }
    }
}
